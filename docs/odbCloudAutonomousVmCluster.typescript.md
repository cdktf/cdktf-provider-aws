# `odbCloudAutonomousVmCluster` Submodule <a name="`odbCloudAutonomousVmCluster` Submodule" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudAutonomousVmCluster <a name="OdbCloudAutonomousVmCluster" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster aws_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster(scope: Construct, id: string, config: OdbCloudAutonomousVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig">OdbCloudAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig">OdbCloudAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster">resetIsMtlsEnabledVmCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: OdbCloudAutonomousVmClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsMtlsEnabledVmCluster` <a name="resetIsMtlsEnabledVmCluster" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster"></a>

```typescript
public resetIsMtlsEnabledVmCluster(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbCloudAutonomousVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">autonomousDataStoragePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs">availableAutonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases">availableContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage">cpuPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue">exadataStorageInTbsLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList">OdbCloudAutonomousVmClusterMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">maxAcdsLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">nonProvisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNodeStorageSizeInGbs">odbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.percentProgress">percentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">provisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">provisionedAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeDatabaseSslCertificateExpires">timeDatabaseSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeOrdsCertificateExpires">timeOrdsCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference">OdbCloudAutonomousVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbsInput">autonomousDataStorageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput">cpuCoreCountPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput">isMtlsEnabledVmClusterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbsInput">memoryPerOracleComputeUnitInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput">scanListenerPortNonTlsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput">scanListenerPortTlsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput">totalContainerDatabasesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbs">autonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">cpuCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">isMtlsEnabledVmCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">scanListenerPortNonTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls">scanListenerPortTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autonomousDataStoragePercentage`<sup>Required</sup> <a name="autonomousDataStoragePercentage" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```typescript
public readonly autonomousDataStoragePercentage: number;
```

- *Type:* number

---

##### `availableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="availableAutonomousDataStorageSizeInTbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs"></a>

```typescript
public readonly availableAutonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `availableContainerDatabases`<sup>Required</sup> <a name="availableContainerDatabases" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```typescript
public readonly availableContainerDatabases: number;
```

- *Type:* number

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `cpuPercentage`<sup>Required</sup> <a name="cpuPercentage" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```typescript
public readonly cpuPercentage: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `exadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="exadataStorageInTbsLowestScaledValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue"></a>

```typescript
public readonly exadataStorageInTbsLowestScaledValue: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: OdbCloudAutonomousVmClusterMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList">OdbCloudAutonomousVmClusterMaintenanceWindowList</a>

---

##### `maxAcdsLowestScaledValue`<sup>Required</sup> <a name="maxAcdsLowestScaledValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```typescript
public readonly maxAcdsLowestScaledValue: number;
```

- *Type:* number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="nonProvisionableAutonomousContainerDatabases" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```typescript
public readonly nonProvisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `odbNodeStorageSizeInGbs`<sup>Required</sup> <a name="odbNodeStorageSizeInGbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNodeStorageSizeInGbs"></a>

```typescript
public readonly odbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.percentProgress"></a>

```typescript
public readonly percentProgress: number;
```

- *Type:* number

---

##### `provisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionableAutonomousContainerDatabases" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```typescript
public readonly provisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionedAutonomousContainerDatabases" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```typescript
public readonly provisionedAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="timeDatabaseSslCertificateExpires" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeDatabaseSslCertificateExpires"></a>

```typescript
public readonly timeDatabaseSslCertificateExpires: string;
```

- *Type:* string

---

##### `timeOrdsCertificateExpires`<sup>Required</sup> <a name="timeOrdsCertificateExpires" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeOrdsCertificateExpires"></a>

```typescript
public readonly timeOrdsCertificateExpires: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeouts"></a>

```typescript
public readonly timeouts: OdbCloudAutonomousVmClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference">OdbCloudAutonomousVmClusterTimeoutsOutputReference</a>

---

##### `autonomousDataStorageSizeInTbsInput`<sup>Optional</sup> <a name="autonomousDataStorageSizeInTbsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbsInput"></a>

```typescript
public readonly autonomousDataStorageSizeInTbsInput: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `cpuCoreCountPerNodeInput`<sup>Optional</sup> <a name="cpuCoreCountPerNodeInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput"></a>

```typescript
public readonly cpuCoreCountPerNodeInput: number;
```

- *Type:* number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `isMtlsEnabledVmClusterInput`<sup>Optional</sup> <a name="isMtlsEnabledVmClusterInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput"></a>

```typescript
public readonly isMtlsEnabledVmClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]

---

##### `memoryPerOracleComputeUnitInGbsInput`<sup>Optional</sup> <a name="memoryPerOracleComputeUnitInGbsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbsInput"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbsInput: number;
```

- *Type:* number

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scanListenerPortNonTlsInput`<sup>Optional</sup> <a name="scanListenerPortNonTlsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput"></a>

```typescript
public readonly scanListenerPortNonTlsInput: number;
```

- *Type:* number

---

##### `scanListenerPortTlsInput`<sup>Optional</sup> <a name="scanListenerPortTlsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput"></a>

```typescript
public readonly scanListenerPortTlsInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OdbCloudAutonomousVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `totalContainerDatabasesInput`<sup>Optional</sup> <a name="totalContainerDatabasesInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput"></a>

```typescript
public readonly totalContainerDatabasesInput: number;
```

- *Type:* number

---

##### `autonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="autonomousDataStorageSizeInTbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbs"></a>

```typescript
public readonly autonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `cpuCoreCountPerNode`<sup>Required</sup> <a name="cpuCoreCountPerNode" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```typescript
public readonly cpuCoreCountPerNode: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isMtlsEnabledVmCluster`<sup>Required</sup> <a name="isMtlsEnabledVmCluster" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```typescript
public readonly isMtlsEnabledVmCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scanListenerPortNonTls`<sup>Required</sup> <a name="scanListenerPortNonTls" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```typescript
public readonly scanListenerPortNonTls: number;
```

- *Type:* number

---

##### `scanListenerPortTls`<sup>Required</sup> <a name="scanListenerPortTls" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```typescript
public readonly scanListenerPortTls: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `totalContainerDatabases`<sup>Required</sup> <a name="totalContainerDatabases" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```typescript
public readonly totalContainerDatabases: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudAutonomousVmClusterConfig <a name="OdbCloudAutonomousVmClusterConfig" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

const odbCloudAutonomousVmClusterConfig: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTbs">autonomousDataStorageSizeInTbs</a></code> | <code>number</code> | The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | Exadata infrastructure id. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode">cpuCoreCountPerNode</a></code> | <code>number</code> | The number of CPU cores enabled per node in the Autonomous VM cluster. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | The database servers in the Autonomous VM cluster. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Autonomous VM cluster. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | The amount of memory allocated per Oracle Compute Unit, in GB. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The unique identifier of the ODB network associated with this Autonomous VM Cluster. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls">scanListenerPortNonTls</a></code> | <code>number</code> | The SCAN listener port for non-TLS (TCP) protocol. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls">scanListenerPortTls</a></code> | <code>number</code> | The SCAN listener port for TLS (TCP) protocol. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>number</code> | The total number of Autonomous Container Databases that can be created with the allocated local storage. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description">description</a></code> | <code>string</code> | The description of the Autonomous VM cluster. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster">isMtlsEnabledVmCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | The license model for the Autonomous VM cluster. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags OdbCloudAutonomousVmCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the Autonomous VM cluster. Changing this will force terraform to create new resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="autonomousDataStorageSizeInTbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTbs"></a>

```typescript
public readonly autonomousDataStorageSizeInTbs: number;
```

- *Type:* number

The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs OdbCloudAutonomousVmCluster#autonomous_data_storage_size_in_tbs}

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

Exadata infrastructure id. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id OdbCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}

---

##### `cpuCoreCountPerNode`<sup>Required</sup> <a name="cpuCoreCountPerNode" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode"></a>

```typescript
public readonly cpuCoreCountPerNode: number;
```

- *Type:* number

The number of CPU cores enabled per node in the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#cpu_core_count_per_node OdbCloudAutonomousVmCluster#cpu_core_count_per_node}

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

The database servers in the Autonomous VM cluster. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#db_servers OdbCloudAutonomousVmCluster#db_servers}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Autonomous VM cluster. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#display_name OdbCloudAutonomousVmCluster#display_name}

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

The amount of memory allocated per Oracle Compute Unit, in GB.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs OdbCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The unique identifier of the ODB network associated with this Autonomous VM Cluster.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#odb_network_id OdbCloudAutonomousVmCluster#odb_network_id}

---

##### `scanListenerPortNonTls`<sup>Required</sup> <a name="scanListenerPortNonTls" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls"></a>

```typescript
public readonly scanListenerPortNonTls: number;
```

- *Type:* number

The SCAN listener port for non-TLS (TCP) protocol.

The default is 1521. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_non_tls OdbCloudAutonomousVmCluster#scan_listener_port_non_tls}

---

##### `scanListenerPortTls`<sup>Required</sup> <a name="scanListenerPortTls" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls"></a>

```typescript
public readonly scanListenerPortTls: number;
```

- *Type:* number

The SCAN listener port for TLS (TCP) protocol.

The default is 2484. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_tls OdbCloudAutonomousVmCluster#scan_listener_port_tls}

---

##### `totalContainerDatabases`<sup>Required</sup> <a name="totalContainerDatabases" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases"></a>

```typescript
public readonly totalContainerDatabases: number;
```

- *Type:* number

The total number of Autonomous Container Databases that can be created with the allocated local storage.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#total_container_databases OdbCloudAutonomousVmCluster#total_container_databases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#description OdbCloudAutonomousVmCluster#description}

---

##### `isMtlsEnabledVmCluster`<sup>Optional</sup> <a name="isMtlsEnabledVmCluster" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster"></a>

```typescript
public readonly isMtlsEnabledVmCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.

Changing this will force terraform to create new resource. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster OdbCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

The license model for the Autonomous VM cluster.

Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE . Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#license_model OdbCloudAutonomousVmCluster#license_model}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#maintenance_window OdbCloudAutonomousVmCluster#maintenance_window}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#region OdbCloudAutonomousVmCluster#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags OdbCloudAutonomousVmCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OdbCloudAutonomousVmClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#timeouts OdbCloudAutonomousVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the Autonomous VM cluster. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#time_zone OdbCloudAutonomousVmCluster#time_zone}

---

### OdbCloudAutonomousVmClusterMaintenanceWindow <a name="OdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

const odbCloudAutonomousVmClusterMaintenanceWindow: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference">preference</a></code> | <code>string</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]</code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months">months</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]</code> | The months when maintenance can be performed. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | Indicates whether to skip release updates during maintenance. |

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#preference OdbCloudAutonomousVmCluster#preference}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#days_of_week OdbCloudAutonomousVmCluster#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#hours_of_day OdbCloudAutonomousVmCluster#hours_of_day}

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#lead_time_in_weeks OdbCloudAutonomousVmCluster#lead_time_in_weeks}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months"></a>

```typescript
public readonly months: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#months OdbCloudAutonomousVmCluster#months}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

Indicates whether to skip release updates during maintenance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#weeks_of_month OdbCloudAutonomousVmCluster#weeks_of_month}

---

### OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek <a name="OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

const odbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#name OdbCloudAutonomousVmCluster#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#name OdbCloudAutonomousVmCluster#name}.

---

### OdbCloudAutonomousVmClusterMaintenanceWindowMonths <a name="OdbCloudAutonomousVmClusterMaintenanceWindowMonths" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

const odbCloudAutonomousVmClusterMaintenanceWindowMonths: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#name OdbCloudAutonomousVmCluster#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#name OdbCloudAutonomousVmCluster#name}.

---

### OdbCloudAutonomousVmClusterTimeouts <a name="OdbCloudAutonomousVmClusterTimeouts" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

const odbCloudAutonomousVmClusterTimeouts: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#create OdbCloudAutonomousVmCluster#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#delete OdbCloudAutonomousVmCluster#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_autonomous_vm_cluster#update OdbCloudAutonomousVmCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList <a name="OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]

---


### OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference <a name="OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>

---


### OdbCloudAutonomousVmClusterMaintenanceWindowList <a name="OdbCloudAutonomousVmClusterMaintenanceWindowList" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.get"></a>

```typescript
public get(index: number): OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>[]

---


### OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList <a name="OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]

---


### OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference <a name="OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowMonths;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>

---


### OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```typescript
public putDaysOfWeek(value: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]

---

##### `putMonths` <a name="putMonths" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.putMonths"></a>

```typescript
public putMonths(value: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowMonths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]

---

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```typescript
public resetLeadTimeInWeeks(): void
```

##### `resetMonths` <a name="resetMonths" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList">OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList;
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList">OdbCloudAutonomousVmClusterMaintenanceWindowMonthsList</a>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">OdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```typescript
public readonly leadTimeInWeeksInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindowMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowMonths">OdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>[]

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---


### OdbCloudAutonomousVmClusterTimeoutsOutputReference <a name="OdbCloudAutonomousVmClusterTimeoutsOutputReference" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktf/provider-aws'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTimeouts">OdbCloudAutonomousVmClusterTimeouts</a>

---



