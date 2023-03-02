# `opsworksMysqlLayer` Submodule <a name="`opsworksMysqlLayer` Submodule" id="@cdktf/provider-aws.opsworksMysqlLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMysqlLayer <a name="OpsworksMysqlLayer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer aws_opsworks_mysql_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayer(scope: Construct, id: string, config: OpsworksMysqlLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig">OpsworksMysqlLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig">OpsworksMysqlLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword">resetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances">resetRootPasswordOnAllInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksMysqlLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksMysqlLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling"></a>

```typescript
public putLoadBasedAutoScaling(value: OpsworksMysqlLayerLoadBasedAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling"></a>

```typescript
public resetLoadBasedAutoScaling(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRootPassword` <a name="resetRootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword"></a>

```typescript
public resetRootPassword(): void
```

##### `resetRootPasswordOnAllInstances` <a name="resetRootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances"></a>

```typescript
public resetRootPasswordOnAllInstances(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput">rootPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput">rootPasswordOnAllInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword">rootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances">rootPasswordOnAllInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksMysqlLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksMysqlLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksMysqlLayerLoadBasedAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksMysqlLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksMysqlLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput"></a>

```typescript
public readonly loadBasedAutoScalingInput: OpsworksMysqlLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rootPasswordInput`<sup>Optional</sup> <a name="rootPasswordInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput"></a>

```typescript
public readonly rootPasswordInput: string;
```

- *Type:* string

---

##### `rootPasswordOnAllInstancesInput`<sup>Optional</sup> <a name="rootPasswordOnAllInstancesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput"></a>

```typescript
public readonly rootPasswordOnAllInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rootPassword`<sup>Required</sup> <a name="rootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword"></a>

```typescript
public readonly rootPassword: string;
```

- *Type:* string

---

##### `rootPasswordOnAllInstances`<sup>Required</sup> <a name="rootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances"></a>

```typescript
public readonly rootPasswordOnAllInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMysqlLayerCloudwatchConfiguration <a name="OpsworksMysqlLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerCloudwatchConfiguration: opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksMysqlLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_streams OpsworksMysqlLayer#log_streams}

---

### OpsworksMysqlLayerCloudwatchConfigurationLogStreams <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerCloudwatchConfigurationLogStreams: opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}.

---

### OpsworksMysqlLayerConfig <a name="OpsworksMysqlLayerConfig" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerConfig: opsworksMysqlLayer.OpsworksMysqlLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword">rootPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances">rootPasswordOnAllInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksMysqlLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cloudwatch_configuration OpsworksMysqlLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksMysqlLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ebs_volume OpsworksMysqlLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksMysqlLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_based_auto_scaling OpsworksMysqlLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}.

---

##### `rootPassword`<sup>Optional</sup> <a name="rootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword"></a>

```typescript
public readonly rootPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}.

---

##### `rootPasswordOnAllInstances`<sup>Optional</sup> <a name="rootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances"></a>

```typescript
public readonly rootPasswordOnAllInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}.

---

### OpsworksMysqlLayerEbsVolume <a name="OpsworksMysqlLayerEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerEbsVolume: opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}.

---

### OpsworksMysqlLayerLoadBasedAutoScaling <a name="OpsworksMysqlLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerLoadBasedAutoScaling: opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#downscaling OpsworksMysqlLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#upscaling OpsworksMysqlLayer#upscaling}

---

### OpsworksMysqlLayerLoadBasedAutoScalingDownscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerLoadBasedAutoScalingDownscaling: opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

### OpsworksMysqlLayerLoadBasedAutoScalingUpscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

const opsworksMysqlLayerLoadBasedAutoScalingUpscaling: opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksMysqlLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMysqlLayerCloudwatchConfigurationLogStreams | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a> | cdktf.IResolvable

---


### OpsworksMysqlLayerCloudwatchConfigurationOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksMysqlLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksMysqlLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMysqlLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---


### OpsworksMysqlLayerEbsVolumeList <a name="OpsworksMysqlLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksMysqlLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksMysqlLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>[]

---


### OpsworksMysqlLayerEbsVolumeOutputReference <a name="OpsworksMysqlLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMysqlLayerEbsVolume | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a> | cdktf.IResolvable

---


### OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```typescript
public putDownscaling(value: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```typescript
public putUpscaling(value: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```typescript
public resetDownscaling(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```typescript
public resetUpscaling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```typescript
public readonly downscalingInput: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```typescript
public readonly upscalingInput: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMysqlLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```typescript
import { opsworksMysqlLayer } from '@cdktf/provider-aws'

new opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---



