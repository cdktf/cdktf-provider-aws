# `dataAwsDmsReplicationInstance` Submodule <a name="`dataAwsDmsReplicationInstance` Submodule" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDmsReplicationInstance <a name="DataAwsDmsReplicationInstance" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer"></a>

```typescript
import { dataAwsDmsReplicationInstance } from '@cdktf/provider-aws'

new dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance(scope: Construct, id: string, config: DataAwsDmsReplicationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig">DataAwsDmsReplicationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig">DataAwsDmsReplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDmsReplicationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct"></a>

```typescript
import { dataAwsDmsReplicationInstance } from '@cdktf/provider-aws'

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement"></a>

```typescript
import { dataAwsDmsReplicationInstance } from '@cdktf/provider-aws'

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsDmsReplicationInstance } from '@cdktf/provider-aws'

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport"></a>

```typescript
import { dataAwsDmsReplicationInstance } from '@cdktf/provider-aws'

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsDmsReplicationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDmsReplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.multiAz">multiAz</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceClass">replicationInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePrivateIps">replicationInstancePrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePublicIps">replicationInstancePublicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationSubnetGroupId">replicationSubnetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceIdInput">replicationInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceId">replicationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.multiAz"></a>

```typescript
public readonly multiAz: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceArn"></a>

```typescript
public readonly replicationInstanceArn: string;
```

- *Type:* string

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceClass"></a>

```typescript
public readonly replicationInstanceClass: string;
```

- *Type:* string

---

##### `replicationInstancePrivateIps`<sup>Required</sup> <a name="replicationInstancePrivateIps" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePrivateIps"></a>

```typescript
public readonly replicationInstancePrivateIps: string[];
```

- *Type:* string[]

---

##### `replicationInstancePublicIps`<sup>Required</sup> <a name="replicationInstancePublicIps" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePublicIps"></a>

```typescript
public readonly replicationInstancePublicIps: string[];
```

- *Type:* string[]

---

##### `replicationSubnetGroupId`<sup>Required</sup> <a name="replicationSubnetGroupId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationSubnetGroupId"></a>

```typescript
public readonly replicationSubnetGroupId: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationInstanceIdInput`<sup>Optional</sup> <a name="replicationInstanceIdInput" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceIdInput"></a>

```typescript
public readonly replicationInstanceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationInstanceId`<sup>Required</sup> <a name="replicationInstanceId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceId"></a>

```typescript
public readonly replicationInstanceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDmsReplicationInstanceConfig <a name="DataAwsDmsReplicationInstanceConfig" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.Initializer"></a>

```typescript
import { dataAwsDmsReplicationInstance } from '@cdktf/provider-aws'

const dataAwsDmsReplicationInstanceConfig: dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.replicationInstanceId">replicationInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `replicationInstanceId`<sup>Required</sup> <a name="replicationInstanceId" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.replicationInstanceId"></a>

```typescript
public readonly replicationInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#region DataAwsDmsReplicationInstance#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}.

---



