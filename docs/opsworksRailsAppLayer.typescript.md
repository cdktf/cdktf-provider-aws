# `opsworksRailsAppLayer` Submodule <a name="`opsworksRailsAppLayer` Submodule" id="@cdktf/provider-aws.opsworksRailsAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksRailsAppLayer <a name="OpsworksRailsAppLayer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer aws_opsworks_rails_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayer(scope: Construct, id: string, config: OpsworksRailsAppLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig">OpsworksRailsAppLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig">OpsworksRailsAppLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer">resetAppServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion">resetBundlerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler">resetManageBundler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion">resetPassengerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion">resetRubygemsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion">resetRubyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksRailsAppLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksRailsAppLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling"></a>

```typescript
public putLoadBasedAutoScaling(value: OpsworksRailsAppLayerLoadBasedAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---

##### `resetAppServer` <a name="resetAppServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer"></a>

```typescript
public resetAppServer(): void
```

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetBundlerVersion` <a name="resetBundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion"></a>

```typescript
public resetBundlerVersion(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetLoadBasedAutoScaling"></a>

```typescript
public resetLoadBasedAutoScaling(): void
```

##### `resetManageBundler` <a name="resetManageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler"></a>

```typescript
public resetManageBundler(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPassengerVersion` <a name="resetPassengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion"></a>

```typescript
public resetPassengerVersion(): void
```

##### `resetRubygemsVersion` <a name="resetRubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion"></a>

```typescript
public resetRubygemsVersion(): void
```

##### `resetRubyVersion` <a name="resetRubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion"></a>

```typescript
public resetRubyVersion(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput">appServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput">bundlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput">manageBundlerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput">passengerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput">rubygemsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput">rubyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer">appServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion">bundlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler">manageBundler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion">passengerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion">rubygemsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksRailsAppLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksRailsAppLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `appServerInput`<sup>Optional</sup> <a name="appServerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput"></a>

```typescript
public readonly appServerInput: string;
```

- *Type:* string

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bundlerVersionInput`<sup>Optional</sup> <a name="bundlerVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput"></a>

```typescript
public readonly bundlerVersionInput: string;
```

- *Type:* string

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksRailsAppLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksRailsAppLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScalingInput"></a>

```typescript
public readonly loadBasedAutoScalingInput: OpsworksRailsAppLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---

##### `manageBundlerInput`<sup>Optional</sup> <a name="manageBundlerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput"></a>

```typescript
public readonly manageBundlerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passengerVersionInput`<sup>Optional</sup> <a name="passengerVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput"></a>

```typescript
public readonly passengerVersionInput: string;
```

- *Type:* string

---

##### `rubygemsVersionInput`<sup>Optional</sup> <a name="rubygemsVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput"></a>

```typescript
public readonly rubygemsVersionInput: string;
```

- *Type:* string

---

##### `rubyVersionInput`<sup>Optional</sup> <a name="rubyVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput"></a>

```typescript
public readonly rubyVersionInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appServer`<sup>Required</sup> <a name="appServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer"></a>

```typescript
public readonly appServer: string;
```

- *Type:* string

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bundlerVersion`<sup>Required</sup> <a name="bundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion"></a>

```typescript
public readonly bundlerVersion: string;
```

- *Type:* string

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `manageBundler`<sup>Required</sup> <a name="manageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler"></a>

```typescript
public readonly manageBundler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `passengerVersion`<sup>Required</sup> <a name="passengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion"></a>

```typescript
public readonly passengerVersion: string;
```

- *Type:* string

---

##### `rubygemsVersion`<sup>Required</sup> <a name="rubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion"></a>

```typescript
public readonly rubygemsVersion: string;
```

- *Type:* string

---

##### `rubyVersion`<sup>Required</sup> <a name="rubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksRailsAppLayerCloudwatchConfiguration <a name="OpsworksRailsAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerCloudwatchConfiguration: opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_streams OpsworksRailsAppLayer#log_streams}

---

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerCloudwatchConfigurationLogStreams: opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}.

---

### OpsworksRailsAppLayerConfig <a name="OpsworksRailsAppLayerConfig" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerConfig: opsworksRailsAppLayer.OpsworksRailsAppLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer">appServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion">bundlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler">manageBundler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion">passengerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion">rubygemsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}.

---

##### `appServer`<sup>Optional</sup> <a name="appServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer"></a>

```typescript
public readonly appServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}.

---

##### `bundlerVersion`<sup>Optional</sup> <a name="bundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion"></a>

```typescript
public readonly bundlerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksRailsAppLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cloudwatch_configuration OpsworksRailsAppLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksRailsAppLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ebs_volume OpsworksRailsAppLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksRailsAppLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_based_auto_scaling OpsworksRailsAppLayer#load_based_auto_scaling}

---

##### `manageBundler`<sup>Optional</sup> <a name="manageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler"></a>

```typescript
public readonly manageBundler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}.

---

##### `passengerVersion`<sup>Optional</sup> <a name="passengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion"></a>

```typescript
public readonly passengerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}.

---

##### `rubygemsVersion`<sup>Optional</sup> <a name="rubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion"></a>

```typescript
public readonly rubygemsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}.

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}.

---

### OpsworksRailsAppLayerEbsVolume <a name="OpsworksRailsAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerEbsVolume: opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}.

---

### OpsworksRailsAppLayerLoadBasedAutoScaling <a name="OpsworksRailsAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerLoadBasedAutoScaling: opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#downscaling OpsworksRailsAppLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#upscaling OpsworksRailsAppLayer#upscaling}

---

### OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerLoadBasedAutoScalingDownscaling: opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}.

---

### OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

const opsworksRailsAppLayerLoadBasedAutoScalingUpscaling: opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a> | cdktf.IResolvable

---


### OpsworksRailsAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---


### OpsworksRailsAppLayerEbsVolumeList <a name="OpsworksRailsAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksRailsAppLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksRailsAppLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

---


### OpsworksRailsAppLayerEbsVolumeOutputReference <a name="OpsworksRailsAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerEbsVolume | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a> | cdktf.IResolvable

---


### OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```typescript
public putDownscaling(value: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```typescript
public putUpscaling(value: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```typescript
public resetDownscaling(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```typescript
public resetUpscaling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```typescript
public readonly downscalingInput: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```typescript
public readonly upscalingInput: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---


### OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/provider-aws'

new opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---



