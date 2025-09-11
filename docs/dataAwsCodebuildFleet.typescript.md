# `dataAwsCodebuildFleet` Submodule <a name="`dataAwsCodebuildFleet` Submodule" id="@cdktf/provider-aws.dataAwsCodebuildFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodebuildFleet <a name="DataAwsCodebuildFleet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet aws_codebuild_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleet(scope: Construct, id: string, config: DataAwsCodebuildFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig">DataAwsCodebuildFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig">DataAwsCodebuildFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCodebuildFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isConstruct"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

dataAwsCodebuildFleet.DataAwsCodebuildFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformElement"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformDataSource"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCodebuildFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCodebuildFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCodebuildFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodebuildFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList">DataAwsCodebuildFleetComputeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.fleetServiceRole">fleetServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.overflowBehavior">overflowBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList">DataAwsCodebuildFleetScalingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.status">status</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList">DataAwsCodebuildFleetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList">DataAwsCodebuildFleetVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number

---

##### `computeConfiguration`<sup>Required</sup> <a name="computeConfiguration" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.computeConfiguration"></a>

```typescript
public readonly computeConfiguration: DataAwsCodebuildFleetComputeConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList">DataAwsCodebuildFleetComputeConfigurationList</a>

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fleetServiceRole`<sup>Required</sup> <a name="fleetServiceRole" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.fleetServiceRole"></a>

```typescript
public readonly fleetServiceRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `overflowBehavior`<sup>Required</sup> <a name="overflowBehavior" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.overflowBehavior"></a>

```typescript
public readonly overflowBehavior: string;
```

- *Type:* string

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.scalingConfiguration"></a>

```typescript
public readonly scalingConfiguration: DataAwsCodebuildFleetScalingConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList">DataAwsCodebuildFleetScalingConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.status"></a>

```typescript
public readonly status: DataAwsCodebuildFleetStatusList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList">DataAwsCodebuildFleetStatusList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsCodebuildFleetVpcConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList">DataAwsCodebuildFleetVpcConfigList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodebuildFleetComputeConfiguration <a name="DataAwsCodebuildFleetComputeConfiguration" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfiguration.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

const dataAwsCodebuildFleetComputeConfiguration: dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfiguration = { ... }
```


### DataAwsCodebuildFleetConfig <a name="DataAwsCodebuildFleetConfig" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

const dataAwsCodebuildFleetConfig: dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet#name DataAwsCodebuildFleet#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet#tags DataAwsCodebuildFleet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet#name DataAwsCodebuildFleet#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet#region DataAwsCodebuildFleet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/codebuild_fleet#tags DataAwsCodebuildFleet#tags}.

---

### DataAwsCodebuildFleetScalingConfiguration <a name="DataAwsCodebuildFleetScalingConfiguration" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfiguration.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

const dataAwsCodebuildFleetScalingConfiguration: dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfiguration = { ... }
```


### DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs <a name="DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

const dataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs: dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs = { ... }
```


### DataAwsCodebuildFleetStatus <a name="DataAwsCodebuildFleetStatus" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatus.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

const dataAwsCodebuildFleetStatus: dataAwsCodebuildFleet.DataAwsCodebuildFleetStatus = { ... }
```


### DataAwsCodebuildFleetVpcConfig <a name="DataAwsCodebuildFleetVpcConfig" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfig.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

const dataAwsCodebuildFleetVpcConfig: dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodebuildFleetComputeConfigurationList <a name="DataAwsCodebuildFleetComputeConfigurationList" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsCodebuildFleetComputeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodebuildFleetComputeConfigurationOutputReference <a name="DataAwsCodebuildFleetComputeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.vcpu">vcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfiguration">DataAwsCodebuildFleetComputeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodebuildFleetComputeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetComputeConfiguration">DataAwsCodebuildFleetComputeConfiguration</a>

---


### DataAwsCodebuildFleetScalingConfigurationList <a name="DataAwsCodebuildFleetScalingConfigurationList" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsCodebuildFleetScalingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodebuildFleetScalingConfigurationOutputReference <a name="DataAwsCodebuildFleetScalingConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.scalingType">scalingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfiguration">DataAwsCodebuildFleetScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `scalingType`<sup>Required</sup> <a name="scalingType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.scalingType"></a>

```typescript
public readonly scalingType: string;
```

- *Type:* string

---

##### `targetTrackingScalingConfigs`<sup>Required</sup> <a name="targetTrackingScalingConfigs" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs"></a>

```typescript
public readonly targetTrackingScalingConfigs: DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodebuildFleetScalingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfiguration">DataAwsCodebuildFleetScalingConfiguration</a>

---


### DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList <a name="DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get"></a>

```typescript
public get(index: number): DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference <a name="DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>

---


### DataAwsCodebuildFleetStatusList <a name="DataAwsCodebuildFleetStatusList" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.get"></a>

```typescript
public get(index: number): DataAwsCodebuildFleetStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodebuildFleetStatusOutputReference <a name="DataAwsCodebuildFleetStatusOutputReference" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatus">DataAwsCodebuildFleetStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodebuildFleetStatus;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetStatus">DataAwsCodebuildFleetStatus</a>

---


### DataAwsCodebuildFleetVpcConfigList <a name="DataAwsCodebuildFleetVpcConfigList" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.get"></a>

```typescript
public get(index: number): DataAwsCodebuildFleetVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodebuildFleetVpcConfigOutputReference <a name="DataAwsCodebuildFleetVpcConfigOutputReference" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCodebuildFleet } from '@cdktf/provider-aws'

new dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfig">DataAwsCodebuildFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodebuildFleetVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodebuildFleet.DataAwsCodebuildFleetVpcConfig">DataAwsCodebuildFleetVpcConfig</a>

---



