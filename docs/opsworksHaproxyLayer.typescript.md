# `opsworksHaproxyLayer` Submodule <a name="`opsworksHaproxyLayer` Submodule" id="@cdktf/provider-aws.opsworksHaproxyLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksHaproxyLayer <a name="OpsworksHaproxyLayer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer aws_opsworks_haproxy_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayer(scope: Construct, id: string, config: OpsworksHaproxyLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig">OpsworksHaproxyLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig">OpsworksHaproxyLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckMethod">resetHealthcheckMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckUrl">resetHealthcheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsEnabled">resetStatsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUrl">resetStatsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUser">resetStatsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksHaproxyLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksHaproxyLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling"></a>

```typescript
public putLoadBasedAutoScaling(value: OpsworksHaproxyLayerLoadBasedAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetHealthcheckMethod` <a name="resetHealthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckMethod"></a>

```typescript
public resetHealthcheckMethod(): void
```

##### `resetHealthcheckUrl` <a name="resetHealthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckUrl"></a>

```typescript
public resetHealthcheckUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetLoadBasedAutoScaling"></a>

```typescript
public resetLoadBasedAutoScaling(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetStatsEnabled` <a name="resetStatsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsEnabled"></a>

```typescript
public resetStatsEnabled(): void
```

##### `resetStatsUrl` <a name="resetStatsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUrl"></a>

```typescript
public resetStatsUrl(): void
```

##### `resetStatsUser` <a name="resetStatsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUser"></a>

```typescript
public resetStatsUser(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference">OpsworksHaproxyLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList">OpsworksHaproxyLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethodInput">healthcheckMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrlInput">healthcheckUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabledInput">statsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPasswordInput">statsPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrlInput">statsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUserInput">statsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethod">healthcheckMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrl">healthcheckUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabled">statsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPassword">statsPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrl">statsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUser">statsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksHaproxyLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference">OpsworksHaproxyLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksHaproxyLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList">OpsworksHaproxyLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksHaproxyLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksHaproxyLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `healthcheckMethodInput`<sup>Optional</sup> <a name="healthcheckMethodInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethodInput"></a>

```typescript
public readonly healthcheckMethodInput: string;
```

- *Type:* string

---

##### `healthcheckUrlInput`<sup>Optional</sup> <a name="healthcheckUrlInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrlInput"></a>

```typescript
public readonly healthcheckUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScalingInput"></a>

```typescript
public readonly loadBasedAutoScalingInput: OpsworksHaproxyLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `statsEnabledInput`<sup>Optional</sup> <a name="statsEnabledInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabledInput"></a>

```typescript
public readonly statsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statsPasswordInput`<sup>Optional</sup> <a name="statsPasswordInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPasswordInput"></a>

```typescript
public readonly statsPasswordInput: string;
```

- *Type:* string

---

##### `statsUrlInput`<sup>Optional</sup> <a name="statsUrlInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrlInput"></a>

```typescript
public readonly statsUrlInput: string;
```

- *Type:* string

---

##### `statsUserInput`<sup>Optional</sup> <a name="statsUserInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUserInput"></a>

```typescript
public readonly statsUserInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `healthcheckMethod`<sup>Required</sup> <a name="healthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethod"></a>

```typescript
public readonly healthcheckMethod: string;
```

- *Type:* string

---

##### `healthcheckUrl`<sup>Required</sup> <a name="healthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrl"></a>

```typescript
public readonly healthcheckUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `statsEnabled`<sup>Required</sup> <a name="statsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabled"></a>

```typescript
public readonly statsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statsPassword`<sup>Required</sup> <a name="statsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPassword"></a>

```typescript
public readonly statsPassword: string;
```

- *Type:* string

---

##### `statsUrl`<sup>Required</sup> <a name="statsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrl"></a>

```typescript
public readonly statsUrl: string;
```

- *Type:* string

---

##### `statsUser`<sup>Required</sup> <a name="statsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUser"></a>

```typescript
public readonly statsUser: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksHaproxyLayerCloudwatchConfiguration <a name="OpsworksHaproxyLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerCloudwatchConfiguration: opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_streams OpsworksHaproxyLayer#log_streams}

---

### OpsworksHaproxyLayerCloudwatchConfigurationLogStreams <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerCloudwatchConfigurationLogStreams: opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}.

---

### OpsworksHaproxyLayerConfig <a name="OpsworksHaproxyLayerConfig" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerConfig: opsworksHaproxyLayer.OpsworksHaproxyLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsPassword">statsPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckMethod">healthcheckMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckUrl">healthcheckUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsEnabled">statsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUrl">statsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUser">statsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}.

---

##### `statsPassword`<sup>Required</sup> <a name="statsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsPassword"></a>

```typescript
public readonly statsPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksHaproxyLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cloudwatch_configuration OpsworksHaproxyLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksHaproxyLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ebs_volume OpsworksHaproxyLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}.

---

##### `healthcheckMethod`<sup>Optional</sup> <a name="healthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckMethod"></a>

```typescript
public readonly healthcheckMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}.

---

##### `healthcheckUrl`<sup>Optional</sup> <a name="healthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckUrl"></a>

```typescript
public readonly healthcheckUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksHaproxyLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_based_auto_scaling OpsworksHaproxyLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}.

---

##### `statsEnabled`<sup>Optional</sup> <a name="statsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsEnabled"></a>

```typescript
public readonly statsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}.

---

##### `statsUrl`<sup>Optional</sup> <a name="statsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUrl"></a>

```typescript
public readonly statsUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}.

---

##### `statsUser`<sup>Optional</sup> <a name="statsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUser"></a>

```typescript
public readonly statsUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}.

---

### OpsworksHaproxyLayerEbsVolume <a name="OpsworksHaproxyLayerEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerEbsVolume: opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}.

---

### OpsworksHaproxyLayerLoadBasedAutoScaling <a name="OpsworksHaproxyLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerLoadBasedAutoScaling: opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#downscaling OpsworksHaproxyLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#upscaling OpsworksHaproxyLayer#upscaling}

---

### OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling <a name="OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerLoadBasedAutoScalingDownscaling: opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}.

---

### OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling <a name="OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

const opsworksHaproxyLayerLoadBasedAutoScalingUpscaling: opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a> | cdktf.IResolvable

---


### OpsworksHaproxyLayerCloudwatchConfigurationOutputReference <a name="OpsworksHaproxyLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList">OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList">OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksHaproxyLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---


### OpsworksHaproxyLayerEbsVolumeList <a name="OpsworksHaproxyLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksHaproxyLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksHaproxyLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>[]

---


### OpsworksHaproxyLayerEbsVolumeOutputReference <a name="OpsworksHaproxyLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksHaproxyLayerEbsVolume | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a> | cdktf.IResolvable

---


### OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```typescript
public putDownscaling(value: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```typescript
public putUpscaling(value: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```typescript
public resetDownscaling(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```typescript
public resetUpscaling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```typescript
public readonly downscalingInput: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```typescript
public readonly upscalingInput: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksHaproxyLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---


### OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```typescript
import { opsworksHaproxyLayer } from '@cdktf/provider-aws'

new opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---



