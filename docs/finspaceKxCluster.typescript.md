# `finspaceKxCluster` Submodule <a name="`finspaceKxCluster` Submodule" id="@cdktf/provider-aws.finspaceKxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxCluster <a name="FinspaceKxCluster" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxCluster(scope: Construct, id: string, config: FinspaceKxClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig">FinspaceKxClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig">FinspaceKxClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration">putAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations">putCacheStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration">putCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration">putSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration">putScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration">putTickerplantLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration">resetAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations">resetCacheStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCapacityConfiguration">resetCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript">resetInitializationScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration">resetSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetScalingGroupConfiguration">resetScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTickerplantLogConfiguration">resetTickerplantLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScalingConfiguration` <a name="putAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration"></a>

```typescript
public putAutoScalingConfiguration(value: FinspaceKxClusterAutoScalingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `putCacheStorageConfigurations` <a name="putCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations"></a>

```typescript
public putCacheStorageConfigurations(value: IResolvable | FinspaceKxClusterCacheStorageConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]

---

##### `putCapacityConfiguration` <a name="putCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration"></a>

```typescript
public putCapacityConfiguration(value: FinspaceKxClusterCapacityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `putCode` <a name="putCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode"></a>

```typescript
public putCode(value: FinspaceKxClusterCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase"></a>

```typescript
public putDatabase(value: IResolvable | FinspaceKxClusterDatabase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]

---

##### `putSavedownStorageConfiguration` <a name="putSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration"></a>

```typescript
public putSavedownStorageConfiguration(value: FinspaceKxClusterSavedownStorageConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `putScalingGroupConfiguration` <a name="putScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration"></a>

```typescript
public putScalingGroupConfiguration(value: FinspaceKxClusterScalingGroupConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---

##### `putTickerplantLogConfiguration` <a name="putTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration"></a>

```typescript
public putTickerplantLogConfiguration(value: IResolvable | FinspaceKxClusterTickerplantLogConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: FinspaceKxClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: FinspaceKxClusterVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `resetAutoScalingConfiguration` <a name="resetAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration"></a>

```typescript
public resetAutoScalingConfiguration(): void
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId"></a>

```typescript
public resetAvailabilityZoneId(): void
```

##### `resetCacheStorageConfigurations` <a name="resetCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations"></a>

```typescript
public resetCacheStorageConfigurations(): void
```

##### `resetCapacityConfiguration` <a name="resetCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCapacityConfiguration"></a>

```typescript
public resetCapacityConfiguration(): void
```

##### `resetCode` <a name="resetCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitializationScript` <a name="resetInitializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript"></a>

```typescript
public resetInitializationScript(): void
```

##### `resetSavedownStorageConfiguration` <a name="resetSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration"></a>

```typescript
public resetSavedownStorageConfiguration(): void
```

##### `resetScalingGroupConfiguration` <a name="resetScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetScalingGroupConfiguration"></a>

```typescript
public resetScalingGroupConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTickerplantLogConfiguration` <a name="resetTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTickerplantLogConfiguration"></a>

```typescript
public resetTickerplantLogConfiguration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

finspaceKxCluster.FinspaceKxCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

finspaceKxCluster.FinspaceKxCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

finspaceKxCluster.FinspaceKxCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

finspaceKxCluster.FinspaceKxCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceKxCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceKxCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations">cacheStorageConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration">savedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfiguration">scalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference">FinspaceKxClusterScalingGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfiguration">tickerplantLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList">FinspaceKxClusterTickerplantLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput">autoScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput">azModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput">cacheStorageConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput">capacityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput">codeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput">databaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput">initializationScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput">releaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput">savedownStorageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfigurationInput">scalingGroupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfigurationInput">tickerplantLogConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode">azMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments">commandLineArguments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript">initializationScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoScalingConfiguration`<sup>Required</sup> <a name="autoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration"></a>

```typescript
public readonly autoScalingConfiguration: FinspaceKxClusterAutoScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a>

---

##### `cacheStorageConfigurations`<sup>Required</sup> <a name="cacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations"></a>

```typescript
public readonly cacheStorageConfigurations: FinspaceKxClusterCacheStorageConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a>

---

##### `capacityConfiguration`<sup>Required</sup> <a name="capacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration"></a>

```typescript
public readonly capacityConfiguration: FinspaceKxClusterCapacityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code"></a>

```typescript
public readonly code: FinspaceKxClusterCodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database"></a>

```typescript
public readonly database: FinspaceKxClusterDatabaseList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a>

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp"></a>

```typescript
public readonly lastModifiedTimestamp: string;
```

- *Type:* string

---

##### `savedownStorageConfiguration`<sup>Required</sup> <a name="savedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration"></a>

```typescript
public readonly savedownStorageConfiguration: FinspaceKxClusterSavedownStorageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a>

---

##### `scalingGroupConfiguration`<sup>Required</sup> <a name="scalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfiguration"></a>

```typescript
public readonly scalingGroupConfiguration: FinspaceKxClusterScalingGroupConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference">FinspaceKxClusterScalingGroupConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tickerplantLogConfiguration`<sup>Required</sup> <a name="tickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfiguration"></a>

```typescript
public readonly tickerplantLogConfiguration: FinspaceKxClusterTickerplantLogConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList">FinspaceKxClusterTickerplantLogConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts"></a>

```typescript
public readonly timeouts: FinspaceKxClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: FinspaceKxClusterVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a>

---

##### `autoScalingConfigurationInput`<sup>Optional</sup> <a name="autoScalingConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput"></a>

```typescript
public readonly autoScalingConfigurationInput: FinspaceKxClusterAutoScalingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput"></a>

```typescript
public readonly azModeInput: string;
```

- *Type:* string

---

##### `cacheStorageConfigurationsInput`<sup>Optional</sup> <a name="cacheStorageConfigurationsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput"></a>

```typescript
public readonly cacheStorageConfigurationsInput: IResolvable | FinspaceKxClusterCacheStorageConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]

---

##### `capacityConfigurationInput`<sup>Optional</sup> <a name="capacityConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput"></a>

```typescript
public readonly capacityConfigurationInput: FinspaceKxClusterCapacityConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput"></a>

```typescript
public readonly codeInput: FinspaceKxClusterCode;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | FinspaceKxClusterDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initializationScriptInput`<sup>Optional</sup> <a name="initializationScriptInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput"></a>

```typescript
public readonly initializationScriptInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput"></a>

```typescript
public readonly releaseLabelInput: string;
```

- *Type:* string

---

##### `savedownStorageConfigurationInput`<sup>Optional</sup> <a name="savedownStorageConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput"></a>

```typescript
public readonly savedownStorageConfigurationInput: FinspaceKxClusterSavedownStorageConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `scalingGroupConfigurationInput`<sup>Optional</sup> <a name="scalingGroupConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfigurationInput"></a>

```typescript
public readonly scalingGroupConfigurationInput: FinspaceKxClusterScalingGroupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tickerplantLogConfigurationInput`<sup>Optional</sup> <a name="tickerplantLogConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfigurationInput"></a>

```typescript
public readonly tickerplantLogConfigurationInput: IResolvable | FinspaceKxClusterTickerplantLogConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FinspaceKxClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: FinspaceKxClusterVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initializationScript`<sup>Required</sup> <a name="initializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript"></a>

```typescript
public readonly initializationScript: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxClusterAutoScalingConfiguration <a name="FinspaceKxClusterAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterAutoScalingConfiguration: finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric">autoScalingMetric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget">metricTarget</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds">scaleInCooldownSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds">scaleOutCooldownSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}. |

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric"></a>

```typescript
public readonly autoScalingMetric: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}.

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}.

---

##### `metricTarget`<sup>Required</sup> <a name="metricTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget"></a>

```typescript
public readonly metricTarget: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}.

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}.

---

##### `scaleInCooldownSeconds`<sup>Required</sup> <a name="scaleInCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds"></a>

```typescript
public readonly scaleInCooldownSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}.

---

##### `scaleOutCooldownSeconds`<sup>Required</sup> <a name="scaleOutCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds"></a>

```typescript
public readonly scaleOutCooldownSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}.

---

### FinspaceKxClusterCacheStorageConfigurations <a name="FinspaceKxClusterCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterCacheStorageConfigurations: finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

### FinspaceKxClusterCapacityConfiguration <a name="FinspaceKxClusterCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterCapacityConfiguration: finspaceKxCluster.FinspaceKxClusterCapacityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}. |

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}.

---

### FinspaceKxClusterCode <a name="FinspaceKxClusterCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterCode: finspaceKxCluster.FinspaceKxClusterCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}.

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}.

---

### FinspaceKxClusterConfig <a name="FinspaceKxClusterConfig" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterConfig: finspaceKxCluster.FinspaceKxClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode">azMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | auto_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations">cacheStorageConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]</code> | cache_storage_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | capacity_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments">commandLineArguments</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database">database</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript">initializationScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration">savedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | savedown_storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.scalingGroupConfiguration">scalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | scaling_group_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tickerplantLogConfiguration">tickerplantLogConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]</code> | tickerplant_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}.

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: FinspaceKxClusterVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}

---

##### `autoScalingConfiguration`<sup>Optional</sup> <a name="autoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration"></a>

```typescript
public readonly autoScalingConfiguration: FinspaceKxClusterAutoScalingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

auto_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}.

---

##### `cacheStorageConfigurations`<sup>Optional</sup> <a name="cacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations"></a>

```typescript
public readonly cacheStorageConfigurations: IResolvable | FinspaceKxClusterCacheStorageConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]

cache_storage_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}

---

##### `capacityConfiguration`<sup>Optional</sup> <a name="capacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration"></a>

```typescript
public readonly capacityConfiguration: FinspaceKxClusterCapacityConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

capacity_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code"></a>

```typescript
public readonly code: FinspaceKxClusterCode;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database"></a>

```typescript
public readonly database: IResolvable | FinspaceKxClusterDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initializationScript`<sup>Optional</sup> <a name="initializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript"></a>

```typescript
public readonly initializationScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}.

---

##### `savedownStorageConfiguration`<sup>Optional</sup> <a name="savedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration"></a>

```typescript
public readonly savedownStorageConfiguration: FinspaceKxClusterSavedownStorageConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

savedown_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}

---

##### `scalingGroupConfiguration`<sup>Optional</sup> <a name="scalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.scalingGroupConfiguration"></a>

```typescript
public readonly scalingGroupConfiguration: FinspaceKxClusterScalingGroupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

scaling_group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scaling_group_configuration FinspaceKxCluster#scaling_group_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}.

---

##### `tickerplantLogConfiguration`<sup>Optional</sup> <a name="tickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tickerplantLogConfiguration"></a>

```typescript
public readonly tickerplantLogConfiguration: IResolvable | FinspaceKxClusterTickerplantLogConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]

tickerplant_log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration FinspaceKxCluster#tickerplant_log_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FinspaceKxClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}

---

### FinspaceKxClusterDatabase <a name="FinspaceKxClusterDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterDatabase: finspaceKxCluster.FinspaceKxClusterDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations">cacheConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]</code> | cache_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId">changesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.dataviewName">dataviewName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}.

---

##### `cacheConfigurations`<sup>Optional</sup> <a name="cacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations"></a>

```typescript
public readonly cacheConfigurations: IResolvable | FinspaceKxClusterDatabaseCacheConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]

cache_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#cache_configurations FinspaceKxCluster#cache_configurations}

---

##### `changesetId`<sup>Optional</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId"></a>

```typescript
public readonly changesetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}.

---

##### `dataviewName`<sup>Optional</sup> <a name="dataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.dataviewName"></a>

```typescript
public readonly dataviewName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}.

---

### FinspaceKxClusterDatabaseCacheConfigurations <a name="FinspaceKxClusterDatabaseCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterDatabaseCacheConfigurations: finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType">cacheType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths">dbPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}. |

---

##### `cacheType`<sup>Required</sup> <a name="cacheType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType"></a>

```typescript
public readonly cacheType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}.

---

##### `dbPaths`<sup>Optional</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths"></a>

```typescript
public readonly dbPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}.

---

### FinspaceKxClusterSavedownStorageConfiguration <a name="FinspaceKxClusterSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterSavedownStorageConfiguration: finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.volumeName">volumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}.

---

### FinspaceKxClusterScalingGroupConfiguration <a name="FinspaceKxClusterScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterScalingGroupConfiguration: finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.scalingGroupName">scalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.cpu">cpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}. |

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.scalingGroupName"></a>

```typescript
public readonly scalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}.

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}.

---

### FinspaceKxClusterTickerplantLogConfiguration <a name="FinspaceKxClusterTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterTickerplantLogConfiguration: finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.property.tickerplantLogVolumes">tickerplantLogVolumes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}. |

---

##### `tickerplantLogVolumes`<sup>Required</sup> <a name="tickerplantLogVolumes" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.property.tickerplantLogVolumes"></a>

```typescript
public readonly tickerplantLogVolumes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}.

---

### FinspaceKxClusterTimeouts <a name="FinspaceKxClusterTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterTimeouts: finspaceKxCluster.FinspaceKxClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}.

---

### FinspaceKxClusterVpcConfiguration <a name="FinspaceKxClusterVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

const finspaceKxClusterVpcConfiguration: finspaceKxCluster.FinspaceKxClusterVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}. |

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxClusterAutoScalingConfigurationOutputReference <a name="FinspaceKxClusterAutoScalingConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput">autoScalingMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput">metricTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput">scaleInCooldownSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput">scaleOutCooldownSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric">autoScalingMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget">metricTarget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds">scaleInCooldownSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds">scaleOutCooldownSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingMetricInput`<sup>Optional</sup> <a name="autoScalingMetricInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput"></a>

```typescript
public readonly autoScalingMetricInput: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `metricTargetInput`<sup>Optional</sup> <a name="metricTargetInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput"></a>

```typescript
public readonly metricTargetInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `scaleInCooldownSecondsInput`<sup>Optional</sup> <a name="scaleInCooldownSecondsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput"></a>

```typescript
public readonly scaleInCooldownSecondsInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownSecondsInput`<sup>Optional</sup> <a name="scaleOutCooldownSecondsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput"></a>

```typescript
public readonly scaleOutCooldownSecondsInput: number;
```

- *Type:* number

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric"></a>

```typescript
public readonly autoScalingMetric: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `metricTarget`<sup>Required</sup> <a name="metricTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget"></a>

```typescript
public readonly metricTarget: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `scaleInCooldownSeconds`<sup>Required</sup> <a name="scaleInCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds"></a>

```typescript
public readonly scaleInCooldownSeconds: number;
```

- *Type:* number

---

##### `scaleOutCooldownSeconds`<sup>Required</sup> <a name="scaleOutCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds"></a>

```typescript
public readonly scaleOutCooldownSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxClusterAutoScalingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---


### FinspaceKxClusterCacheStorageConfigurationsList <a name="FinspaceKxClusterCacheStorageConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get"></a>

```typescript
public get(index: number): FinspaceKxClusterCacheStorageConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterCacheStorageConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>[]

---


### FinspaceKxClusterCacheStorageConfigurationsOutputReference <a name="FinspaceKxClusterCacheStorageConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterCacheStorageConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>

---


### FinspaceKxClusterCapacityConfigurationOutputReference <a name="FinspaceKxClusterCapacityConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxClusterCapacityConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---


### FinspaceKxClusterCodeOutputReference <a name="FinspaceKxClusterCodeOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion"></a>

```typescript
public resetS3ObjectVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput"></a>

```typescript
public readonly s3ObjectVersionInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxClusterCode;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---


### FinspaceKxClusterDatabaseCacheConfigurationsList <a name="FinspaceKxClusterDatabaseCacheConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get"></a>

```typescript
public get(index: number): FinspaceKxClusterDatabaseCacheConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterDatabaseCacheConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]

---


### FinspaceKxClusterDatabaseCacheConfigurationsOutputReference <a name="FinspaceKxClusterDatabaseCacheConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths">resetDbPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbPaths` <a name="resetDbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths"></a>

```typescript
public resetDbPaths(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput">cacheTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput">dbPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType">cacheType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths">dbPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheTypeInput`<sup>Optional</sup> <a name="cacheTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput"></a>

```typescript
public readonly cacheTypeInput: string;
```

- *Type:* string

---

##### `dbPathsInput`<sup>Optional</sup> <a name="dbPathsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput"></a>

```typescript
public readonly dbPathsInput: string[];
```

- *Type:* string[]

---

##### `cacheType`<sup>Required</sup> <a name="cacheType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType"></a>

```typescript
public readonly cacheType: string;
```

- *Type:* string

---

##### `dbPaths`<sup>Required</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths"></a>

```typescript
public readonly dbPaths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterDatabaseCacheConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>

---


### FinspaceKxClusterDatabaseList <a name="FinspaceKxClusterDatabaseList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterDatabaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get"></a>

```typescript
public get(index: number): FinspaceKxClusterDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>[]

---


### FinspaceKxClusterDatabaseOutputReference <a name="FinspaceKxClusterDatabaseOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations">putCacheConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations">resetCacheConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId">resetChangesetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetDataviewName">resetDataviewName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheConfigurations` <a name="putCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations"></a>

```typescript
public putCacheConfigurations(value: IResolvable | FinspaceKxClusterDatabaseCacheConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]

---

##### `resetCacheConfigurations` <a name="resetCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations"></a>

```typescript
public resetCacheConfigurations(): void
```

##### `resetChangesetId` <a name="resetChangesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId"></a>

```typescript
public resetChangesetId(): void
```

##### `resetDataviewName` <a name="resetDataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetDataviewName"></a>

```typescript
public resetDataviewName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations">cacheConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput">cacheConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput">changesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewNameInput">dataviewNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId">changesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewName">dataviewName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheConfigurations`<sup>Required</sup> <a name="cacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations"></a>

```typescript
public readonly cacheConfigurations: FinspaceKxClusterDatabaseCacheConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a>

---

##### `cacheConfigurationsInput`<sup>Optional</sup> <a name="cacheConfigurationsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput"></a>

```typescript
public readonly cacheConfigurationsInput: IResolvable | FinspaceKxClusterDatabaseCacheConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>[]

---

##### `changesetIdInput`<sup>Optional</sup> <a name="changesetIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput"></a>

```typescript
public readonly changesetIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `dataviewNameInput`<sup>Optional</sup> <a name="dataviewNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewNameInput"></a>

```typescript
public readonly dataviewNameInput: string;
```

- *Type:* string

---

##### `changesetId`<sup>Required</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId"></a>

```typescript
public readonly changesetId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dataviewName`<sup>Required</sup> <a name="dataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewName"></a>

```typescript
public readonly dataviewName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterDatabase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>

---


### FinspaceKxClusterSavedownStorageConfigurationOutputReference <a name="FinspaceKxClusterSavedownStorageConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxClusterSavedownStorageConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---


### FinspaceKxClusterScalingGroupConfigurationOutputReference <a name="FinspaceKxClusterScalingGroupConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetMemoryLimit"></a>

```typescript
public resetMemoryLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimitInput">memoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupNameInput">scalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupName">scalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimitInput"></a>

```typescript
public readonly memoryLimitInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `scalingGroupNameInput`<sup>Optional</sup> <a name="scalingGroupNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupNameInput"></a>

```typescript
public readonly scalingGroupNameInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupName"></a>

```typescript
public readonly scalingGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxClusterScalingGroupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---


### FinspaceKxClusterTickerplantLogConfigurationList <a name="FinspaceKxClusterTickerplantLogConfigurationList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get"></a>

```typescript
public get(index: number): FinspaceKxClusterTickerplantLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterTickerplantLogConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>[]

---


### FinspaceKxClusterTickerplantLogConfigurationOutputReference <a name="FinspaceKxClusterTickerplantLogConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumesInput">tickerplantLogVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumes">tickerplantLogVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tickerplantLogVolumesInput`<sup>Optional</sup> <a name="tickerplantLogVolumesInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumesInput"></a>

```typescript
public readonly tickerplantLogVolumesInput: string[];
```

- *Type:* string[]

---

##### `tickerplantLogVolumes`<sup>Required</sup> <a name="tickerplantLogVolumes" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumes"></a>

```typescript
public readonly tickerplantLogVolumes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterTickerplantLogConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>

---


### FinspaceKxClusterTimeoutsOutputReference <a name="FinspaceKxClusterTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---


### FinspaceKxClusterVpcConfigurationOutputReference <a name="FinspaceKxClusterVpcConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxCluster } from '@cdktf/provider-aws'

new finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxClusterVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---



