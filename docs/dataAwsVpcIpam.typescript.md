# `dataAwsVpcIpam` Submodule <a name="`dataAwsVpcIpam` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpam <a name="DataAwsVpcIpam" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/vpc_ipam aws_vpc_ipam}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

new dataAwsVpcIpam.DataAwsVpcIpam(scope: Construct, id: string, config: DataAwsVpcIpamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig">DataAwsVpcIpamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig">DataAwsVpcIpamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcIpam resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isConstruct"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

dataAwsVpcIpam.DataAwsVpcIpam.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVpcIpam resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpcIpam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpcIpam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/vpc_ipam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcIpam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryAssociationId">defaultResourceDiscoveryAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryId">defaultResourceDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.enablePrivateGua">enablePrivateGua</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ipamRegion">ipamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.operatingRegions">operatingRegions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList">DataAwsVpcIpamOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.privateDefaultScopeId">privateDefaultScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.publicDefaultScopeId">publicDefaultScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.resourceDiscoveryAssociationCount">resourceDiscoveryAssociationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.scopeCount">scopeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultResourceDiscoveryAssociationId`<sup>Required</sup> <a name="defaultResourceDiscoveryAssociationId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryAssociationId"></a>

```typescript
public readonly defaultResourceDiscoveryAssociationId: string;
```

- *Type:* string

---

##### `defaultResourceDiscoveryId`<sup>Required</sup> <a name="defaultResourceDiscoveryId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryId"></a>

```typescript
public readonly defaultResourceDiscoveryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enablePrivateGua`<sup>Required</sup> <a name="enablePrivateGua" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.enablePrivateGua"></a>

```typescript
public readonly enablePrivateGua: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ipamRegion"></a>

```typescript
public readonly ipamRegion: string;
```

- *Type:* string

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.operatingRegions"></a>

```typescript
public readonly operatingRegions: DataAwsVpcIpamOperatingRegionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList">DataAwsVpcIpamOperatingRegionsList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `privateDefaultScopeId`<sup>Required</sup> <a name="privateDefaultScopeId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.privateDefaultScopeId"></a>

```typescript
public readonly privateDefaultScopeId: string;
```

- *Type:* string

---

##### `publicDefaultScopeId`<sup>Required</sup> <a name="publicDefaultScopeId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.publicDefaultScopeId"></a>

```typescript
public readonly publicDefaultScopeId: string;
```

- *Type:* string

---

##### `resourceDiscoveryAssociationCount`<sup>Required</sup> <a name="resourceDiscoveryAssociationCount" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.resourceDiscoveryAssociationCount"></a>

```typescript
public readonly resourceDiscoveryAssociationCount: number;
```

- *Type:* number

---

##### `scopeCount`<sup>Required</sup> <a name="scopeCount" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.scopeCount"></a>

```typescript
public readonly scopeCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamConfig <a name="DataAwsVpcIpamConfig" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.Initializer"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

const dataAwsVpcIpamConfig: dataAwsVpcIpam.DataAwsVpcIpamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/vpc_ipam#id DataAwsVpcIpam#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/vpc_ipam#id DataAwsVpcIpam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/vpc_ipam#region DataAwsVpcIpam#region}

---

### DataAwsVpcIpamOperatingRegions <a name="DataAwsVpcIpamOperatingRegions" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions.Initializer"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

const dataAwsVpcIpamOperatingRegions: dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamOperatingRegionsList <a name="DataAwsVpcIpamOperatingRegionsList" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

new dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.get"></a>

```typescript
public get(index: number): DataAwsVpcIpamOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcIpamOperatingRegionsOutputReference <a name="DataAwsVpcIpamOperatingRegionsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcIpam } from '@cdktf/provider-aws'

new dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions">DataAwsVpcIpamOperatingRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcIpamOperatingRegions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions">DataAwsVpcIpamOperatingRegions</a>

---



