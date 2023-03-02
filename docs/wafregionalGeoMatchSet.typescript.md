# `wafregionalGeoMatchSet` Submodule <a name="`wafregionalGeoMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalGeoMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalGeoMatchSet <a name="WafregionalGeoMatchSet" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set aws_wafregional_geo_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

new wafregionalGeoMatchSet.WafregionalGeoMatchSet(scope: Construct, id: string, config: WafregionalGeoMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig">WafregionalGeoMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig">WafregionalGeoMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint">putGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetGeoMatchConstraint">resetGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGeoMatchConstraint` <a name="putGeoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint"></a>

```typescript
public putGeoMatchConstraint(value: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

---

##### `resetGeoMatchConstraint` <a name="resetGeoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetGeoMatchConstraint"></a>

```typescript
public resetGeoMatchConstraint(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraint">geoMatchConstraint</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList">WafregionalGeoMatchSetGeoMatchConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraintInput">geoMatchConstraintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `geoMatchConstraint`<sup>Required</sup> <a name="geoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraint"></a>

```typescript
public readonly geoMatchConstraint: WafregionalGeoMatchSetGeoMatchConstraintList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList">WafregionalGeoMatchSetGeoMatchConstraintList</a>

---

##### `geoMatchConstraintInput`<sup>Optional</sup> <a name="geoMatchConstraintInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraintInput"></a>

```typescript
public readonly geoMatchConstraintInput: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalGeoMatchSetConfig <a name="WafregionalGeoMatchSetConfig" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

const wafregionalGeoMatchSetConfig: wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.geoMatchConstraint">geoMatchConstraint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]</code> | geo_match_constraint block. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}.

---

##### `geoMatchConstraint`<sup>Optional</sup> <a name="geoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.geoMatchConstraint"></a>

```typescript
public readonly geoMatchConstraint: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

geo_match_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#geo_match_constraint WafregionalGeoMatchSet#geo_match_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WafregionalGeoMatchSetGeoMatchConstraint <a name="WafregionalGeoMatchSetGeoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

const wafregionalGeoMatchSetGeoMatchConstraint: wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#type WafregionalGeoMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#value WafregionalGeoMatchSet#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#type WafregionalGeoMatchSet#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#value WafregionalGeoMatchSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalGeoMatchSetGeoMatchConstraintList <a name="WafregionalGeoMatchSetGeoMatchConstraintList" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

new wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get"></a>

```typescript
public get(index: number): WafregionalGeoMatchSetGeoMatchConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

---


### WafregionalGeoMatchSetGeoMatchConstraintOutputReference <a name="WafregionalGeoMatchSetGeoMatchConstraintOutputReference" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/provider-aws'

new wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalGeoMatchSetGeoMatchConstraint | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a> | cdktf.IResolvable

---



