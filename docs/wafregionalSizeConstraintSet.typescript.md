# `wafregionalSizeConstraintSet` Submodule <a name="`wafregionalSizeConstraintSet` Submodule" id="@cdktf/provider-aws.wafregionalSizeConstraintSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalSizeConstraintSet <a name="WafregionalSizeConstraintSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set aws_wafregional_size_constraint_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

new wafregionalSizeConstraintSet.WafregionalSizeConstraintSet(scope: Construct, id: string, config: WafregionalSizeConstraintSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig">WafregionalSizeConstraintSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig">WafregionalSizeConstraintSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints">putSizeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetSizeConstraints">resetSizeConstraints</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSizeConstraints` <a name="putSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints"></a>

```typescript
public putSizeConstraints(value: IResolvable | WafregionalSizeConstraintSetSizeConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSizeConstraints` <a name="resetSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetSizeConstraints"></a>

```typescript
public resetSizeConstraints(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraints">sizeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList">WafregionalSizeConstraintSetSizeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraintsInput">sizeConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `sizeConstraints`<sup>Required</sup> <a name="sizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraints"></a>

```typescript
public readonly sizeConstraints: WafregionalSizeConstraintSetSizeConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList">WafregionalSizeConstraintSetSizeConstraintsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeConstraintsInput`<sup>Optional</sup> <a name="sizeConstraintsInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraintsInput"></a>

```typescript
public readonly sizeConstraintsInput: IResolvable | WafregionalSizeConstraintSetSizeConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalSizeConstraintSetConfig <a name="WafregionalSizeConstraintSetConfig" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

const wafregionalSizeConstraintSetConfig: wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.sizeConstraints">sizeConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]</code> | size_constraints block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sizeConstraints`<sup>Optional</sup> <a name="sizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.sizeConstraints"></a>

```typescript
public readonly sizeConstraints: IResolvable | WafregionalSizeConstraintSetSizeConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size_constraints WafregionalSizeConstraintSet#size_constraints}

---

### WafregionalSizeConstraintSetSizeConstraints <a name="WafregionalSizeConstraintSetSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

const wafregionalSizeConstraintSetSizeConstraints: wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#comparison_operator WafregionalSizeConstraintSet#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size WafregionalSizeConstraintSet#size}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#text_transformation WafregionalSizeConstraintSet#text_transformation}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#comparison_operator WafregionalSizeConstraintSet#comparison_operator}.

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#field_to_match WafregionalSizeConstraintSet#field_to_match}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size WafregionalSizeConstraintSet#size}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#text_transformation WafregionalSizeConstraintSet#text_transformation}.

---

### WafregionalSizeConstraintSetSizeConstraintsFieldToMatch <a name="WafregionalSizeConstraintSetSizeConstraintsFieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

const wafregionalSizeConstraintSetSizeConstraintsFieldToMatch: wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference <a name="WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

new wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


### WafregionalSizeConstraintSetSizeConstraintsList <a name="WafregionalSizeConstraintSetSizeConstraintsList" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

new wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get"></a>

```typescript
public get(index: number): WafregionalSizeConstraintSetSizeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalSizeConstraintSetSizeConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a>[]

---


### WafregionalSizeConstraintSetSizeConstraintsOutputReference <a name="WafregionalSizeConstraintSetSizeConstraintsOutputReference" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer"></a>

```typescript
import { wafregionalSizeConstraintSet } from '@cdktf/provider-aws'

new wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalSizeConstraintSetSizeConstraints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints">WafregionalSizeConstraintSetSizeConstraints</a> | cdktf.IResolvable

---



