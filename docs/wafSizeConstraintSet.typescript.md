# `wafSizeConstraintSet` Submodule <a name="`wafSizeConstraintSet` Submodule" id="@cdktf/provider-aws.wafSizeConstraintSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSizeConstraintSet <a name="WafSizeConstraintSet" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set aws_waf_size_constraint_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

new wafSizeConstraintSet.WafSizeConstraintSet(scope: Construct, id: string, config: WafSizeConstraintSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig">WafSizeConstraintSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig">WafSizeConstraintSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.putSizeConstraints">putSizeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetSizeConstraints">resetSizeConstraints</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSizeConstraints` <a name="putSizeConstraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.putSizeConstraints"></a>

```typescript
public putSizeConstraints(value: IResolvable | WafSizeConstraintSetSizeConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.putSizeConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSizeConstraints` <a name="resetSizeConstraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.resetSizeConstraints"></a>

```typescript
public resetSizeConstraints(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isConstruct"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

wafSizeConstraintSet.WafSizeConstraintSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraints">sizeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList">WafSizeConstraintSetSizeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraintsInput">sizeConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `sizeConstraints`<sup>Required</sup> <a name="sizeConstraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraints"></a>

```typescript
public readonly sizeConstraints: WafSizeConstraintSetSizeConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList">WafSizeConstraintSetSizeConstraintsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeConstraintsInput`<sup>Optional</sup> <a name="sizeConstraintsInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.sizeConstraintsInput"></a>

```typescript
public readonly sizeConstraintsInput: IResolvable | WafSizeConstraintSetSizeConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafSizeConstraintSetConfig <a name="WafSizeConstraintSetConfig" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

const wafSizeConstraintSetConfig: wafSizeConstraintSet.WafSizeConstraintSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#name WafSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#id WafSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.sizeConstraints">sizeConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]</code> | size_constraints block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#name WafSizeConstraintSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#id WafSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sizeConstraints`<sup>Optional</sup> <a name="sizeConstraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetConfig.property.sizeConstraints"></a>

```typescript
public readonly sizeConstraints: IResolvable | WafSizeConstraintSetSizeConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size_constraints WafSizeConstraintSet#size_constraints}

---

### WafSizeConstraintSetSizeConstraints <a name="WafSizeConstraintSetSizeConstraints" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

const wafSizeConstraintSetSizeConstraints: wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#comparison_operator WafSizeConstraintSet#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size WafSizeConstraintSet#size}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#text_transformation WafSizeConstraintSet#text_transformation}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#comparison_operator WafSizeConstraintSet#comparison_operator}.

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#field_to_match WafSizeConstraintSet#field_to_match}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#size WafSizeConstraintSet#size}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#text_transformation WafSizeConstraintSet#text_transformation}.

---

### WafSizeConstraintSetSizeConstraintsFieldToMatch <a name="WafSizeConstraintSetSizeConstraintsFieldToMatch" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

const wafSizeConstraintSetSizeConstraintsFieldToMatch: wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#type WafSizeConstraintSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#data WafSizeConstraintSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#type WafSizeConstraintSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set#data WafSizeConstraintSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference <a name="WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

new wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafSizeConstraintSetSizeConstraintsFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


### WafSizeConstraintSetSizeConstraintsList <a name="WafSizeConstraintSetSizeConstraintsList" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

new wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.get"></a>

```typescript
public get(index: number): WafSizeConstraintSetSizeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafSizeConstraintSetSizeConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a>[]

---


### WafSizeConstraintSetSizeConstraintsOutputReference <a name="WafSizeConstraintSetSizeConstraintsOutputReference" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer"></a>

```typescript
import { wafSizeConstraintSet } from '@cdktf/provider-aws'

new wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafSizeConstraintSetSizeConstraintsFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafSizeConstraintSetSizeConstraintsFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsFieldToMatch">WafSizeConstraintSetSizeConstraintsFieldToMatch</a>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafSizeConstraintSetSizeConstraints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafSizeConstraintSet.WafSizeConstraintSetSizeConstraints">WafSizeConstraintSetSizeConstraints</a> | cdktf.IResolvable

---



