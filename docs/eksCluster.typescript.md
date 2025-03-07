# `eksCluster` Submodule <a name="`eksCluster` Submodule" id="@cdktf/provider-aws.eksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCluster <a name="EksCluster" id="@cdktf/provider-aws.eksCluster.EksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster aws_eks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksCluster(scope: Construct, id: string, config: EksClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig">EksClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig">EksClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putComputeConfig">putComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig">putKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putOutpostConfig">putOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig">putRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putZonalShiftConfig">putZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetBootstrapSelfManagedAddons">resetBootstrapSelfManagedAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetComputeConfig">resetComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetEnabledClusterLogTypes">resetEnabledClusterLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetKubernetesNetworkConfig">resetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetOutpostConfig">resetOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetRemoteNetworkConfig">resetRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetStorageConfig">resetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetZonalShiftConfig">resetZonalShiftConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.eksCluster.EksCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksCluster.EksCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.eksCluster.EksCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksCluster.EksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.eksCluster.EksCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.eksCluster.EksCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.eksCluster.EksCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.eksCluster.EksCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.eksCluster.EksCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksCluster.EksCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.eksCluster.EksCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.eksCluster.EksCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCluster.EksCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCluster.EksCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.eksCluster.EksCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCluster.EksCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.eksCluster.EksCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksCluster.EksCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksCluster.EksCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.eksCluster.EksCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCluster.EksCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putAccessConfig"></a>

```typescript
public putAccessConfig(value: EksClusterAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `putComputeConfig` <a name="putComputeConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putComputeConfig"></a>

```typescript
public putComputeConfig(value: EksClusterComputeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: EksClusterEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---

##### `putKubernetesNetworkConfig` <a name="putKubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig"></a>

```typescript
public putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `putOutpostConfig` <a name="putOutpostConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putOutpostConfig"></a>

```typescript
public putOutpostConfig(value: EksClusterOutpostConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putOutpostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `putRemoteNetworkConfig` <a name="putRemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig"></a>

```typescript
public putRemoteNetworkConfig(value: EksClusterRemoteNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putStorageConfig"></a>

```typescript
public putStorageConfig(value: EksClusterStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.eksCluster.EksCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: EksClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksCluster.putUpgradePolicy"></a>

```typescript
public putUpgradePolicy(value: EksClusterUpgradePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putVpcConfig"></a>

```typescript
public putVpcConfig(value: EksClusterVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---

##### `putZonalShiftConfig` <a name="putZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putZonalShiftConfig"></a>

```typescript
public putZonalShiftConfig(value: EksClusterZonalShiftConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksCluster.putZonalShiftConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetBootstrapSelfManagedAddons` <a name="resetBootstrapSelfManagedAddons" id="@cdktf/provider-aws.eksCluster.EksCluster.resetBootstrapSelfManagedAddons"></a>

```typescript
public resetBootstrapSelfManagedAddons(): void
```

##### `resetComputeConfig` <a name="resetComputeConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetComputeConfig"></a>

```typescript
public resetComputeConfig(): void
```

##### `resetEnabledClusterLogTypes` <a name="resetEnabledClusterLogTypes" id="@cdktf/provider-aws.eksCluster.EksCluster.resetEnabledClusterLogTypes"></a>

```typescript
public resetEnabledClusterLogTypes(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.eksCluster.EksCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubernetesNetworkConfig` <a name="resetKubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetKubernetesNetworkConfig"></a>

```typescript
public resetKubernetesNetworkConfig(): void
```

##### `resetOutpostConfig` <a name="resetOutpostConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetOutpostConfig"></a>

```typescript
public resetOutpostConfig(): void
```

##### `resetRemoteNetworkConfig` <a name="resetRemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetRemoteNetworkConfig"></a>

```typescript
public resetRemoteNetworkConfig(): void
```

##### `resetStorageConfig` <a name="resetStorageConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetStorageConfig"></a>

```typescript
public resetStorageConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.eksCluster.EksCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.eksCluster.EksCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.eksCluster.EksCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksCluster.resetUpgradePolicy"></a>

```typescript
public resetUpgradePolicy(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.eksCluster.EksCluster.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetZonalShiftConfig` <a name="resetZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetZonalShiftConfig"></a>

```typescript
public resetZonalShiftConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.eksCluster.EksCluster.isConstruct"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

eksCluster.EksCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksCluster.EksCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformElement"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

eksCluster.EksCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformResource"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

eksCluster.EksCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

eksCluster.EksCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList">EksClusterCertificateAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference">EksClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList">EksClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference">EksClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference">EksClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput">bootstrapSelfManagedAddonsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfigInput">computeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypesInput">enabledClusterLogTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfigInput">kubernetesNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfigInput">outpostConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfigInput">remoteNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfigInput">zonalShiftConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypes">enabledClusterLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksCluster.EksCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.eksCluster.EksCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.eksCluster.EksCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.eksCluster.EksCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.eksCluster.EksCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.eksCluster.EksCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksCluster.EksCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksCluster.EksCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksCluster.EksCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksCluster.EksCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCluster.EksCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksCluster.EksCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfig"></a>

```typescript
public readonly accessConfig: EksClusterAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-aws.eksCluster.EksCluster.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: EksClusterCertificateAuthorityList;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList">EksClusterCertificateAuthorityList</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.eksCluster.EksCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `computeConfig`<sup>Required</sup> <a name="computeConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfig"></a>

```typescript
public readonly computeConfig: EksClusterComputeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.eksCluster.EksCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EksClusterEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference">EksClusterEncryptionConfigOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.eksCluster.EksCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-aws.eksCluster.EksCluster.property.identity"></a>

```typescript
public readonly identity: EksClusterIdentityList;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList">EksClusterIdentityList</a>

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="kubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfig"></a>

```typescript
public readonly kubernetesNetworkConfig: EksClusterKubernetesNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a>

---

##### `outpostConfig`<sup>Required</sup> <a name="outpostConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfig"></a>

```typescript
public readonly outpostConfig: EksClusterOutpostConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a>

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.eksCluster.EksCluster.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `remoteNetworkConfig`<sup>Required</sup> <a name="remoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfig"></a>

```typescript
public readonly remoteNetworkConfig: EksClusterRemoteNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.eksCluster.EksCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfig"></a>

```typescript
public readonly storageConfig: EksClusterStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksCluster.EksCluster.property.timeouts"></a>

```typescript
public readonly timeouts: EksClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference">EksClusterTimeoutsOutputReference</a>

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: EksClusterUpgradePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: EksClusterVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference">EksClusterVpcConfigOutputReference</a>

---

##### `zonalShiftConfig`<sup>Required</sup> <a name="zonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfig"></a>

```typescript
public readonly zonalShiftConfig: EksClusterZonalShiftConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: EksClusterAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `bootstrapSelfManagedAddonsInput`<sup>Optional</sup> <a name="bootstrapSelfManagedAddonsInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput"></a>

```typescript
public readonly bootstrapSelfManagedAddonsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeConfigInput`<sup>Optional</sup> <a name="computeConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfigInput"></a>

```typescript
public readonly computeConfigInput: EksClusterComputeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `enabledClusterLogTypesInput`<sup>Optional</sup> <a name="enabledClusterLogTypesInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypesInput"></a>

```typescript
public readonly enabledClusterLogTypesInput: string[];
```

- *Type:* string[]

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: EksClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesNetworkConfigInput`<sup>Optional</sup> <a name="kubernetesNetworkConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfigInput"></a>

```typescript
public readonly kubernetesNetworkConfigInput: EksClusterKubernetesNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outpostConfigInput`<sup>Optional</sup> <a name="outpostConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfigInput"></a>

```typescript
public readonly outpostConfigInput: EksClusterOutpostConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `remoteNetworkConfigInput`<sup>Optional</sup> <a name="remoteNetworkConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfigInput"></a>

```typescript
public readonly remoteNetworkConfigInput: EksClusterRemoteNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: EksClusterStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EksClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicyInput"></a>

```typescript
public readonly upgradePolicyInput: EksClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: EksClusterVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---

##### `zonalShiftConfigInput`<sup>Optional</sup> <a name="zonalShiftConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfigInput"></a>

```typescript
public readonly zonalShiftConfigInput: EksClusterZonalShiftConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `bootstrapSelfManagedAddons`<sup>Required</sup> <a name="bootstrapSelfManagedAddons" id="@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddons"></a>

```typescript
public readonly bootstrapSelfManagedAddons: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledClusterLogTypes`<sup>Required</sup> <a name="enabledClusterLogTypes" id="@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypes"></a>

```typescript
public readonly enabledClusterLogTypes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCluster.EksCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.eksCluster.EksCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.eksCluster.EksCluster.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksClusterAccessConfig <a name="EksClusterAccessConfig" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterAccessConfig: eksCluster.EksClusterAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}. |

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}.

---

##### `bootstrapClusterCreatorAdminPermissions`<sup>Optional</sup> <a name="bootstrapClusterCreatorAdminPermissions" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions"></a>

```typescript
public readonly bootstrapClusterCreatorAdminPermissions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}.

---

### EksClusterCertificateAuthority <a name="EksClusterCertificateAuthority" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterCertificateAuthority: eksCluster.EksClusterCertificateAuthority = { ... }
```


### EksClusterComputeConfig <a name="EksClusterComputeConfig" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterComputeConfig: eksCluster.EksClusterComputeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodePools">nodePools</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodeRoleArn">nodeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

##### `nodePools`<sup>Optional</sup> <a name="nodePools" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodePools"></a>

```typescript
public readonly nodePools: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}.

---

##### `nodeRoleArn`<sup>Optional</sup> <a name="nodeRoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodeRoleArn"></a>

```typescript
public readonly nodeRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}.

---

### EksClusterConfig <a name="EksClusterConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterConfig: eksCluster.EksClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#name EksCluster#name}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.enabledClusterLogTypes">enabledClusterLogTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#id EksCluster#id}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | kubernetes_network_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | outpost_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | remote_network_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#tags EksCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#version EksCluster#version}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | zonal_shift_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#name EksCluster#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}.

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: EksClusterVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#vpc_config EksCluster#vpc_config}

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.accessConfig"></a>

```typescript
public readonly accessConfig: EksClusterAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#access_config EksCluster#access_config}

---

##### `bootstrapSelfManagedAddons`<sup>Optional</sup> <a name="bootstrapSelfManagedAddons" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons"></a>

```typescript
public readonly bootstrapSelfManagedAddons: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}.

---

##### `computeConfig`<sup>Optional</sup> <a name="computeConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.computeConfig"></a>

```typescript
public readonly computeConfig: EksClusterComputeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}

---

##### `enabledClusterLogTypes`<sup>Optional</sup> <a name="enabledClusterLogTypes" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.enabledClusterLogTypes"></a>

```typescript
public readonly enabledClusterLogTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}.

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EksClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#id EksCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="kubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig"></a>

```typescript
public readonly kubernetesNetworkConfig: EksClusterKubernetesNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}

---

##### `outpostConfig`<sup>Optional</sup> <a name="outpostConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.outpostConfig"></a>

```typescript
public readonly outpostConfig: EksClusterOutpostConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

outpost_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}

---

##### `remoteNetworkConfig`<sup>Optional</sup> <a name="remoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.remoteNetworkConfig"></a>

```typescript
public readonly remoteNetworkConfig: EksClusterRemoteNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

remote_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.storageConfig"></a>

```typescript
public readonly storageConfig: EksClusterStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#tags EksCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#timeouts EksCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: EksClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#version EksCluster#version}.

---

##### `zonalShiftConfig`<sup>Optional</sup> <a name="zonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.zonalShiftConfig"></a>

```typescript
public readonly zonalShiftConfig: EksClusterZonalShiftConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

zonal_shift_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}

---

### EksClusterEncryptionConfig <a name="EksClusterEncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterEncryptionConfig: eksCluster.EksClusterEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | provider block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#resources EksCluster#resources}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.provider"></a>

```typescript
public readonly provider: EksClusterEncryptionConfigProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#provider EksCluster#provider}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#resources EksCluster#resources}.

---

### EksClusterEncryptionConfigProvider <a name="EksClusterEncryptionConfigProvider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterEncryptionConfigProvider: eksCluster.EksClusterEncryptionConfigProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}. |

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}.

---

### EksClusterIdentity <a name="EksClusterIdentity" id="@cdktf/provider-aws.eksCluster.EksClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterIdentity.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterIdentity: eksCluster.EksClusterIdentity = { ... }
```


### EksClusterIdentityOidc <a name="EksClusterIdentityOidc" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterIdentityOidc: eksCluster.EksClusterIdentityOidc = { ... }
```


### EksClusterKubernetesNetworkConfig <a name="EksClusterKubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterKubernetesNetworkConfig: eksCluster.EksClusterKubernetesNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing">elasticLoadBalancing</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | elastic_load_balancing block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily">ipFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr">serviceIpv4Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}. |

---

##### `elasticLoadBalancing`<sup>Optional</sup> <a name="elasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing"></a>

```typescript
public readonly elasticLoadBalancing: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

elastic_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}

---

##### `ipFamily`<sup>Optional</sup> <a name="ipFamily" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}.

---

##### `serviceIpv4Cidr`<sup>Optional</sup> <a name="serviceIpv4Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

```typescript
public readonly serviceIpv4Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}.

---

### EksClusterKubernetesNetworkConfigElasticLoadBalancing <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterKubernetesNetworkConfigElasticLoadBalancing: eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

### EksClusterOutpostConfig <a name="EksClusterOutpostConfig" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterOutpostConfig: eksCluster.EksClusterOutpostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType">controlPlaneInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.outpostArns">outpostArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement">controlPlanePlacement</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | control_plane_placement block. |

---

##### `controlPlaneInstanceType`<sup>Required</sup> <a name="controlPlaneInstanceType" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType"></a>

```typescript
public readonly controlPlaneInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}.

---

##### `outpostArns`<sup>Required</sup> <a name="outpostArns" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.outpostArns"></a>

```typescript
public readonly outpostArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}.

---

##### `controlPlanePlacement`<sup>Optional</sup> <a name="controlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement"></a>

```typescript
public readonly controlPlanePlacement: EksClusterOutpostConfigControlPlanePlacement;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

control_plane_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}

---

### EksClusterOutpostConfigControlPlanePlacement <a name="EksClusterOutpostConfigControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterOutpostConfigControlPlanePlacement: eksCluster.EksClusterOutpostConfigControlPlanePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#group_name EksCluster#group_name}. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#group_name EksCluster#group_name}.

---

### EksClusterRemoteNetworkConfig <a name="EksClusterRemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterRemoteNetworkConfig: eksCluster.EksClusterRemoteNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks">remoteNodeNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | remote_node_networks block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks">remotePodNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | remote_pod_networks block. |

---

##### `remoteNodeNetworks`<sup>Required</sup> <a name="remoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks"></a>

```typescript
public readonly remoteNodeNetworks: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

remote_node_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}

---

##### `remotePodNetworks`<sup>Optional</sup> <a name="remotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks"></a>

```typescript
public readonly remotePodNetworks: EksClusterRemoteNetworkConfigRemotePodNetworks;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

remote_pod_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}

---

### EksClusterRemoteNetworkConfigRemoteNodeNetworks <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterRemoteNetworkConfigRemoteNodeNetworks: eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs">cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}.

---

### EksClusterRemoteNetworkConfigRemotePodNetworks <a name="EksClusterRemoteNetworkConfigRemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterRemoteNetworkConfigRemotePodNetworks: eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs">cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}.

---

### EksClusterStorageConfig <a name="EksClusterStorageConfig" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterStorageConfig: eksCluster.EksClusterStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig.property.blockStorage">blockStorage</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | block_storage block. |

---

##### `blockStorage`<sup>Optional</sup> <a name="blockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfig.property.blockStorage"></a>

```typescript
public readonly blockStorage: EksClusterStorageConfigBlockStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

block_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}

---

### EksClusterStorageConfigBlockStorage <a name="EksClusterStorageConfigBlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterStorageConfigBlockStorage: eksCluster.EksClusterStorageConfigBlockStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

### EksClusterTimeouts <a name="EksClusterTimeouts" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterTimeouts: eksCluster.EksClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#create EksCluster#create}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#delete EksCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#update EksCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#create EksCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#delete EksCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#update EksCluster#update}.

---

### EksClusterUpgradePolicy <a name="EksClusterUpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterUpgradePolicy: eksCluster.EksClusterUpgradePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy.property.supportType">supportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#support_type EksCluster#support_type}. |

---

##### `supportType`<sup>Optional</sup> <a name="supportType" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy.property.supportType"></a>

```typescript
public readonly supportType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#support_type EksCluster#support_type}.

---

### EksClusterVpcConfig <a name="EksClusterVpcConfig" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterVpcConfig: eksCluster.EksClusterVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPrivateAccess">endpointPrivateAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPublicAccess">endpointPublicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.publicAccessCidrs">publicAccessCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}.

---

##### `endpointPrivateAccess`<sup>Optional</sup> <a name="endpointPrivateAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPrivateAccess"></a>

```typescript
public readonly endpointPrivateAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}.

---

##### `endpointPublicAccess`<sup>Optional</sup> <a name="endpointPublicAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPublicAccess"></a>

```typescript
public readonly endpointPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}.

---

##### `publicAccessCidrs`<sup>Optional</sup> <a name="publicAccessCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.publicAccessCidrs"></a>

```typescript
public readonly publicAccessCidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}.

---

### EksClusterZonalShiftConfig <a name="EksClusterZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

const eksClusterZonalShiftConfig: eksCluster.EksClusterZonalShiftConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksClusterAccessConfigOutputReference <a name="EksClusterAccessConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions">resetBootstrapClusterCreatorAdminPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetBootstrapClusterCreatorAdminPermissions` <a name="resetBootstrapClusterCreatorAdminPermissions" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions"></a>

```typescript
public resetBootstrapClusterCreatorAdminPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput">bootstrapClusterCreatorAdminPermissionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `bootstrapClusterCreatorAdminPermissionsInput`<sup>Optional</sup> <a name="bootstrapClusterCreatorAdminPermissionsInput" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput"></a>

```typescript
public readonly bootstrapClusterCreatorAdminPermissionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `bootstrapClusterCreatorAdminPermissions`<sup>Required</sup> <a name="bootstrapClusterCreatorAdminPermissions" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions"></a>

```typescript
public readonly bootstrapClusterCreatorAdminPermissions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---


### EksClusterCertificateAuthorityList <a name="EksClusterCertificateAuthorityList" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterCertificateAuthorityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get"></a>

```typescript
public get(index: number): EksClusterCertificateAuthorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksClusterCertificateAuthorityOutputReference <a name="EksClusterCertificateAuthorityOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterCertificateAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority">EksClusterCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterCertificateAuthority;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority">EksClusterCertificateAuthority</a>

---


### EksClusterComputeConfigOutputReference <a name="EksClusterComputeConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterComputeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools">resetNodePools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn">resetNodeRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNodePools` <a name="resetNodePools" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools"></a>

```typescript
public resetNodePools(): void
```

##### `resetNodeRoleArn` <a name="resetNodeRoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn"></a>

```typescript
public resetNodeRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput">nodePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput">nodeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools">nodePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn">nodeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodePoolsInput`<sup>Optional</sup> <a name="nodePoolsInput" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput"></a>

```typescript
public readonly nodePoolsInput: string[];
```

- *Type:* string[]

---

##### `nodeRoleArnInput`<sup>Optional</sup> <a name="nodeRoleArnInput" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput"></a>

```typescript
public readonly nodeRoleArnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools"></a>

```typescript
public readonly nodePools: string[];
```

- *Type:* string[]

---

##### `nodeRoleArn`<sup>Required</sup> <a name="nodeRoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn"></a>

```typescript
public readonly nodeRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterComputeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---


### EksClusterEncryptionConfigOutputReference <a name="EksClusterEncryptionConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider">putProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvider` <a name="putProvider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider"></a>

```typescript
public putProvider(value: EksClusterEncryptionConfigProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput">providerInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider"></a>

```typescript
public readonly provider: EksClusterEncryptionConfigProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a>

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: EksClusterEncryptionConfigProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---


### EksClusterEncryptionConfigProviderOutputReference <a name="EksClusterEncryptionConfigProviderOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterEncryptionConfigProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterEncryptionConfigProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


### EksClusterIdentityList <a name="EksClusterIdentityList" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.get"></a>

```typescript
public get(index: number): EksClusterIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksClusterIdentityOidcList <a name="EksClusterIdentityOidcList" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterIdentityOidcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.get"></a>

```typescript
public get(index: number): EksClusterIdentityOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksClusterIdentityOidcOutputReference <a name="EksClusterIdentityOidcOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterIdentityOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc">EksClusterIdentityOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterIdentityOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc">EksClusterIdentityOidc</a>

---


### EksClusterIdentityOutputReference <a name="EksClusterIdentityOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList">EksClusterIdentityOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentity">EksClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.oidc"></a>

```typescript
public readonly oidc: EksClusterIdentityOidcList;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList">EksClusterIdentityOidcList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentity">EksClusterIdentity</a>

---


### EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---


### EksClusterKubernetesNetworkConfigOutputReference <a name="EksClusterKubernetesNetworkConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterKubernetesNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing">putElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing">resetElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily">resetIpFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr">resetServiceIpv4Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElasticLoadBalancing` <a name="putElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing"></a>

```typescript
public putElasticLoadBalancing(value: EksClusterKubernetesNetworkConfigElasticLoadBalancing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `resetElasticLoadBalancing` <a name="resetElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing"></a>

```typescript
public resetElasticLoadBalancing(): void
```

##### `resetIpFamily` <a name="resetIpFamily" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily"></a>

```typescript
public resetIpFamily(): void
```

##### `resetServiceIpv4Cidr` <a name="resetServiceIpv4Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr"></a>

```typescript
public resetServiceIpv4Cidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing">elasticLoadBalancing</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr">serviceIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput">elasticLoadBalancingInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput">ipFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput">serviceIpv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily">ipFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr">serviceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elasticLoadBalancing`<sup>Required</sup> <a name="elasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing"></a>

```typescript
public readonly elasticLoadBalancing: EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a>

---

##### `serviceIpv6Cidr`<sup>Required</sup> <a name="serviceIpv6Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr"></a>

```typescript
public readonly serviceIpv6Cidr: string;
```

- *Type:* string

---

##### `elasticLoadBalancingInput`<sup>Optional</sup> <a name="elasticLoadBalancingInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput"></a>

```typescript
public readonly elasticLoadBalancingInput: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `ipFamilyInput`<sup>Optional</sup> <a name="ipFamilyInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput"></a>

```typescript
public readonly ipFamilyInput: string;
```

- *Type:* string

---

##### `serviceIpv4CidrInput`<sup>Optional</sup> <a name="serviceIpv4CidrInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput"></a>

```typescript
public readonly serviceIpv4CidrInput: string;
```

- *Type:* string

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

---

##### `serviceIpv4Cidr`<sup>Required</sup> <a name="serviceIpv4Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr"></a>

```typescript
public readonly serviceIpv4Cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubernetesNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---


### EksClusterOutpostConfigControlPlanePlacementOutputReference <a name="EksClusterOutpostConfigControlPlanePlacementOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterOutpostConfigControlPlanePlacement;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---


### EksClusterOutpostConfigOutputReference <a name="EksClusterOutpostConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterOutpostConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement">putControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement">resetControlPlanePlacement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlanePlacement` <a name="putControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement"></a>

```typescript
public putControlPlanePlacement(value: EksClusterOutpostConfigControlPlanePlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `resetControlPlanePlacement` <a name="resetControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement"></a>

```typescript
public resetControlPlanePlacement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement">controlPlanePlacement</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput">controlPlaneInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput">controlPlanePlacementInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput">outpostArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType">controlPlaneInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns">outpostArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlanePlacement`<sup>Required</sup> <a name="controlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement"></a>

```typescript
public readonly controlPlanePlacement: EksClusterOutpostConfigControlPlanePlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a>

---

##### `controlPlaneInstanceTypeInput`<sup>Optional</sup> <a name="controlPlaneInstanceTypeInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput"></a>

```typescript
public readonly controlPlaneInstanceTypeInput: string;
```

- *Type:* string

---

##### `controlPlanePlacementInput`<sup>Optional</sup> <a name="controlPlanePlacementInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput"></a>

```typescript
public readonly controlPlanePlacementInput: EksClusterOutpostConfigControlPlanePlacement;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `outpostArnsInput`<sup>Optional</sup> <a name="outpostArnsInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput"></a>

```typescript
public readonly outpostArnsInput: string[];
```

- *Type:* string[]

---

##### `controlPlaneInstanceType`<sup>Required</sup> <a name="controlPlaneInstanceType" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType"></a>

```typescript
public readonly controlPlaneInstanceType: string;
```

- *Type:* string

---

##### `outpostArns`<sup>Required</sup> <a name="outpostArns" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns"></a>

```typescript
public readonly outpostArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterOutpostConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---


### EksClusterRemoteNetworkConfigOutputReference <a name="EksClusterRemoteNetworkConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterRemoteNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks">putRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks">putRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks">resetRemotePodNetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemoteNodeNetworks` <a name="putRemoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks"></a>

```typescript
public putRemoteNodeNetworks(value: EksClusterRemoteNetworkConfigRemoteNodeNetworks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---

##### `putRemotePodNetworks` <a name="putRemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks"></a>

```typescript
public putRemotePodNetworks(value: EksClusterRemoteNetworkConfigRemotePodNetworks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---

##### `resetRemotePodNetworks` <a name="resetRemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks"></a>

```typescript
public resetRemotePodNetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks">remoteNodeNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference">EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks">remotePodNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference">EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput">remoteNodeNetworksInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput">remotePodNetworksInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `remoteNodeNetworks`<sup>Required</sup> <a name="remoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks"></a>

```typescript
public readonly remoteNodeNetworks: EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference">EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference</a>

---

##### `remotePodNetworks`<sup>Required</sup> <a name="remotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks"></a>

```typescript
public readonly remotePodNetworks: EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference">EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference</a>

---

##### `remoteNodeNetworksInput`<sup>Optional</sup> <a name="remoteNodeNetworksInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput"></a>

```typescript
public readonly remoteNodeNetworksInput: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---

##### `remotePodNetworksInput`<sup>Optional</sup> <a name="remotePodNetworksInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput"></a>

```typescript
public readonly remotePodNetworksInput: EksClusterRemoteNetworkConfigRemotePodNetworks;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterRemoteNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs"></a>

```typescript
public resetCidrs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---


### EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs"></a>

```typescript
public resetCidrs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterRemoteNetworkConfigRemotePodNetworks;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---


### EksClusterStorageConfigBlockStorageOutputReference <a name="EksClusterStorageConfigBlockStorageOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterStorageConfigBlockStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterStorageConfigBlockStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---


### EksClusterStorageConfigOutputReference <a name="EksClusterStorageConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage">putBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage">resetBlockStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockStorage` <a name="putBlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage"></a>

```typescript
public putBlockStorage(value: EksClusterStorageConfigBlockStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `resetBlockStorage` <a name="resetBlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage"></a>

```typescript
public resetBlockStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage">blockStorage</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput">blockStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockStorage`<sup>Required</sup> <a name="blockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage"></a>

```typescript
public readonly blockStorage: EksClusterStorageConfigBlockStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a>

---

##### `blockStorageInput`<sup>Optional</sup> <a name="blockStorageInput" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput"></a>

```typescript
public readonly blockStorageInput: EksClusterStorageConfigBlockStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---


### EksClusterTimeoutsOutputReference <a name="EksClusterTimeoutsOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---


### EksClusterUpgradePolicyOutputReference <a name="EksClusterUpgradePolicyOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterUpgradePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType">resetSupportType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportType` <a name="resetSupportType" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType"></a>

```typescript
public resetSupportType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput">supportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType">supportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `supportTypeInput`<sup>Optional</sup> <a name="supportTypeInput" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput"></a>

```typescript
public readonly supportTypeInput: string;
```

- *Type:* string

---

##### `supportType`<sup>Required</sup> <a name="supportType" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType"></a>

```typescript
public readonly supportType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---


### EksClusterVpcConfigOutputReference <a name="EksClusterVpcConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPrivateAccess">resetEndpointPrivateAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPublicAccess">resetEndpointPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetPublicAccessCidrs">resetPublicAccessCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointPrivateAccess` <a name="resetEndpointPrivateAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPrivateAccess"></a>

```typescript
public resetEndpointPrivateAccess(): void
```

##### `resetEndpointPublicAccess` <a name="resetEndpointPublicAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPublicAccess"></a>

```typescript
public resetEndpointPublicAccess(): void
```

##### `resetPublicAccessCidrs` <a name="resetPublicAccessCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetPublicAccessCidrs"></a>

```typescript
public resetPublicAccessCidrs(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccessInput">endpointPrivateAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccessInput">endpointPublicAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrsInput">publicAccessCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccess">endpointPrivateAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccess">endpointPublicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrs">publicAccessCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSecurityGroupId`<sup>Required</sup> <a name="clusterSecurityGroupId" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `endpointPrivateAccessInput`<sup>Optional</sup> <a name="endpointPrivateAccessInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccessInput"></a>

```typescript
public readonly endpointPrivateAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointPublicAccessInput`<sup>Optional</sup> <a name="endpointPublicAccessInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccessInput"></a>

```typescript
public readonly endpointPublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicAccessCidrsInput`<sup>Optional</sup> <a name="publicAccessCidrsInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrsInput"></a>

```typescript
public readonly publicAccessCidrsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `endpointPrivateAccess`<sup>Required</sup> <a name="endpointPrivateAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccess"></a>

```typescript
public readonly endpointPrivateAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointPublicAccess`<sup>Required</sup> <a name="endpointPublicAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccess"></a>

```typescript
public readonly endpointPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicAccessCidrs`<sup>Required</sup> <a name="publicAccessCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrs"></a>

```typescript
public readonly publicAccessCidrs: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---


### EksClusterZonalShiftConfigOutputReference <a name="EksClusterZonalShiftConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktf/provider-aws'

new eksCluster.EksClusterZonalShiftConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterZonalShiftConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---



