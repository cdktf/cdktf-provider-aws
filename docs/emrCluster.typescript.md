# `emrCluster` Submodule <a name="`emrCluster` Submodule" id="@cdktf/provider-aws.emrCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrCluster <a name="EmrCluster" id="@cdktf/provider-aws.emrCluster.EmrCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster aws_emr_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrCluster(scope: Construct, id: string, config: EmrClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig">EmrClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig">EmrClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy">putAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction">putBootstrapAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet">putCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup">putCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes">putEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes">putKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet">putMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup">putMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo">resetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications">resetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole">resetAutoscalingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy">resetAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction">resetBootstrapAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson">resetConfigurationsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet">resetCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup">resetCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId">resetCustomAmiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize">resetEbsRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes">resetEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps">resetKeepJobFlowAliveWhenNoSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes">resetKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates">resetListStepsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId">resetLogEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet">resetMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup">resetMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior">resetScaleDownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStep">resetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel">resetStepConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection">resetTerminationProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers">resetVisibleToAllUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoTerminationPolicy` <a name="putAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy"></a>

```typescript
public putAutoTerminationPolicy(value: EmrClusterAutoTerminationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `putBootstrapAction` <a name="putBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction"></a>

```typescript
public putBootstrapAction(value: IResolvable | EmrClusterBootstrapAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]

---

##### `putCoreInstanceFleet` <a name="putCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet"></a>

```typescript
public putCoreInstanceFleet(value: EmrClusterCoreInstanceFleet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `putCoreInstanceGroup` <a name="putCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup"></a>

```typescript
public putCoreInstanceGroup(value: EmrClusterCoreInstanceGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `putEc2Attributes` <a name="putEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes"></a>

```typescript
public putEc2Attributes(value: EmrClusterEc2Attributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `putKerberosAttributes` <a name="putKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes"></a>

```typescript
public putKerberosAttributes(value: EmrClusterKerberosAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `putMasterInstanceFleet` <a name="putMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet"></a>

```typescript
public putMasterInstanceFleet(value: EmrClusterMasterInstanceFleet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `putMasterInstanceGroup` <a name="putMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup"></a>

```typescript
public putMasterInstanceGroup(value: EmrClusterMasterInstanceGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `putStep` <a name="putStep" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep"></a>

```typescript
public putStep(value: IResolvable | EmrClusterStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]

---

##### `resetAdditionalInfo` <a name="resetAdditionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo"></a>

```typescript
public resetAdditionalInfo(): void
```

##### `resetApplications` <a name="resetApplications" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications"></a>

```typescript
public resetApplications(): void
```

##### `resetAutoscalingRole` <a name="resetAutoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole"></a>

```typescript
public resetAutoscalingRole(): void
```

##### `resetAutoTerminationPolicy` <a name="resetAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy"></a>

```typescript
public resetAutoTerminationPolicy(): void
```

##### `resetBootstrapAction` <a name="resetBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction"></a>

```typescript
public resetBootstrapAction(): void
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations"></a>

```typescript
public resetConfigurations(): void
```

##### `resetConfigurationsJson` <a name="resetConfigurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson"></a>

```typescript
public resetConfigurationsJson(): void
```

##### `resetCoreInstanceFleet` <a name="resetCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet"></a>

```typescript
public resetCoreInstanceFleet(): void
```

##### `resetCoreInstanceGroup` <a name="resetCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup"></a>

```typescript
public resetCoreInstanceGroup(): void
```

##### `resetCustomAmiId` <a name="resetCustomAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId"></a>

```typescript
public resetCustomAmiId(): void
```

##### `resetEbsRootVolumeSize` <a name="resetEbsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize"></a>

```typescript
public resetEbsRootVolumeSize(): void
```

##### `resetEc2Attributes` <a name="resetEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes"></a>

```typescript
public resetEc2Attributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeepJobFlowAliveWhenNoSteps` <a name="resetKeepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps"></a>

```typescript
public resetKeepJobFlowAliveWhenNoSteps(): void
```

##### `resetKerberosAttributes` <a name="resetKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes"></a>

```typescript
public resetKerberosAttributes(): void
```

##### `resetListStepsStates` <a name="resetListStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates"></a>

```typescript
public resetListStepsStates(): void
```

##### `resetLogEncryptionKmsKeyId` <a name="resetLogEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId"></a>

```typescript
public resetLogEncryptionKmsKeyId(): void
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri"></a>

```typescript
public resetLogUri(): void
```

##### `resetMasterInstanceFleet` <a name="resetMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet"></a>

```typescript
public resetMasterInstanceFleet(): void
```

##### `resetMasterInstanceGroup` <a name="resetMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup"></a>

```typescript
public resetMasterInstanceGroup(): void
```

##### `resetScaleDownBehavior` <a name="resetScaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior"></a>

```typescript
public resetScaleDownBehavior(): void
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration"></a>

```typescript
public resetSecurityConfiguration(): void
```

##### `resetStep` <a name="resetStep" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStep"></a>

```typescript
public resetStep(): void
```

##### `resetStepConcurrencyLevel` <a name="resetStepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel"></a>

```typescript
public resetStepConcurrencyLevel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTerminationProtection` <a name="resetTerminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection"></a>

```typescript
public resetTerminationProtection(): void
```

##### `resetVisibleToAllUsers` <a name="resetVisibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers"></a>

```typescript
public resetVisibleToAllUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

emrCluster.EmrCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

emrCluster.EmrCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

emrCluster.EmrCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy">autoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction">bootstrapAction</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState">clusterState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet">coreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup">coreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes">ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes">kerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet">masterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup">masterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns">masterPublicDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.step">step</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput">additionalInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput">applicationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput">autoscalingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput">autoTerminationPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput">bootstrapActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput">configurationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput">configurationsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput">coreInstanceFleetInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput">coreInstanceGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput">customAmiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput">ebsRootVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput">ec2AttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput">keepJobFlowAliveWhenNoStepsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput">kerberosAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput">listStepsStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput">logEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput">logUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput">masterInstanceFleetInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput">masterInstanceGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput">releaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput">scaleDownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput">serviceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput">stepConcurrencyLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput">stepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput">terminationProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput">visibleToAllUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo">additionalInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applications">applications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole">autoscalingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations">configurations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson">configurationsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId">customAmiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps">keepJobFlowAliveWhenNoSteps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates">listStepsStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId">logEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior">scaleDownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel">stepConcurrencyLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection">terminationProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoTerminationPolicy`<sup>Required</sup> <a name="autoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy"></a>

```typescript
public readonly autoTerminationPolicy: EmrClusterAutoTerminationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a>

---

##### `bootstrapAction`<sup>Required</sup> <a name="bootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction"></a>

```typescript
public readonly bootstrapAction: EmrClusterBootstrapActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a>

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState"></a>

```typescript
public readonly clusterState: string;
```

- *Type:* string

---

##### `coreInstanceFleet`<sup>Required</sup> <a name="coreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet"></a>

```typescript
public readonly coreInstanceFleet: EmrClusterCoreInstanceFleetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a>

---

##### `coreInstanceGroup`<sup>Required</sup> <a name="coreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup"></a>

```typescript
public readonly coreInstanceGroup: EmrClusterCoreInstanceGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a>

---

##### `ec2Attributes`<sup>Required</sup> <a name="ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes"></a>

```typescript
public readonly ec2Attributes: EmrClusterEc2AttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a>

---

##### `kerberosAttributes`<sup>Required</sup> <a name="kerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes"></a>

```typescript
public readonly kerberosAttributes: EmrClusterKerberosAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a>

---

##### `masterInstanceFleet`<sup>Required</sup> <a name="masterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet"></a>

```typescript
public readonly masterInstanceFleet: EmrClusterMasterInstanceFleetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a>

---

##### `masterInstanceGroup`<sup>Required</sup> <a name="masterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup"></a>

```typescript
public readonly masterInstanceGroup: EmrClusterMasterInstanceGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a>

---

##### `masterPublicDns`<sup>Required</sup> <a name="masterPublicDns" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns"></a>

```typescript
public readonly masterPublicDns: string;
```

- *Type:* string

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.step"></a>

```typescript
public readonly step: EmrClusterStepList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a>

---

##### `additionalInfoInput`<sup>Optional</sup> <a name="additionalInfoInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput"></a>

```typescript
public readonly additionalInfoInput: string;
```

- *Type:* string

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput"></a>

```typescript
public readonly applicationsInput: string[];
```

- *Type:* string[]

---

##### `autoscalingRoleInput`<sup>Optional</sup> <a name="autoscalingRoleInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput"></a>

```typescript
public readonly autoscalingRoleInput: string;
```

- *Type:* string

---

##### `autoTerminationPolicyInput`<sup>Optional</sup> <a name="autoTerminationPolicyInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput"></a>

```typescript
public readonly autoTerminationPolicyInput: EmrClusterAutoTerminationPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `bootstrapActionInput`<sup>Optional</sup> <a name="bootstrapActionInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput"></a>

```typescript
public readonly bootstrapActionInput: IResolvable | EmrClusterBootstrapAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput"></a>

```typescript
public readonly configurationsInput: string;
```

- *Type:* string

---

##### `configurationsJsonInput`<sup>Optional</sup> <a name="configurationsJsonInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput"></a>

```typescript
public readonly configurationsJsonInput: string;
```

- *Type:* string

---

##### `coreInstanceFleetInput`<sup>Optional</sup> <a name="coreInstanceFleetInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput"></a>

```typescript
public readonly coreInstanceFleetInput: EmrClusterCoreInstanceFleet;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `coreInstanceGroupInput`<sup>Optional</sup> <a name="coreInstanceGroupInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput"></a>

```typescript
public readonly coreInstanceGroupInput: EmrClusterCoreInstanceGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `customAmiIdInput`<sup>Optional</sup> <a name="customAmiIdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput"></a>

```typescript
public readonly customAmiIdInput: string;
```

- *Type:* string

---

##### `ebsRootVolumeSizeInput`<sup>Optional</sup> <a name="ebsRootVolumeSizeInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput"></a>

```typescript
public readonly ebsRootVolumeSizeInput: number;
```

- *Type:* number

---

##### `ec2AttributesInput`<sup>Optional</sup> <a name="ec2AttributesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput"></a>

```typescript
public readonly ec2AttributesInput: EmrClusterEc2Attributes;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keepJobFlowAliveWhenNoStepsInput`<sup>Optional</sup> <a name="keepJobFlowAliveWhenNoStepsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput"></a>

```typescript
public readonly keepJobFlowAliveWhenNoStepsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosAttributesInput`<sup>Optional</sup> <a name="kerberosAttributesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput"></a>

```typescript
public readonly kerberosAttributesInput: EmrClusterKerberosAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `listStepsStatesInput`<sup>Optional</sup> <a name="listStepsStatesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput"></a>

```typescript
public readonly listStepsStatesInput: string[];
```

- *Type:* string[]

---

##### `logEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="logEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput"></a>

```typescript
public readonly logEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput"></a>

```typescript
public readonly logUriInput: string;
```

- *Type:* string

---

##### `masterInstanceFleetInput`<sup>Optional</sup> <a name="masterInstanceFleetInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput"></a>

```typescript
public readonly masterInstanceFleetInput: EmrClusterMasterInstanceFleet;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `masterInstanceGroupInput`<sup>Optional</sup> <a name="masterInstanceGroupInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput"></a>

```typescript
public readonly masterInstanceGroupInput: EmrClusterMasterInstanceGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput"></a>

```typescript
public readonly releaseLabelInput: string;
```

- *Type:* string

---

##### `scaleDownBehaviorInput`<sup>Optional</sup> <a name="scaleDownBehaviorInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput"></a>

```typescript
public readonly scaleDownBehaviorInput: string;
```

- *Type:* string

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput"></a>

```typescript
public readonly securityConfigurationInput: string;
```

- *Type:* string

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput"></a>

```typescript
public readonly serviceRoleInput: string;
```

- *Type:* string

---

##### `stepConcurrencyLevelInput`<sup>Optional</sup> <a name="stepConcurrencyLevelInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput"></a>

```typescript
public readonly stepConcurrencyLevelInput: number;
```

- *Type:* number

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput"></a>

```typescript
public readonly stepInput: IResolvable | EmrClusterStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terminationProtectionInput`<sup>Optional</sup> <a name="terminationProtectionInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput"></a>

```typescript
public readonly terminationProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibleToAllUsersInput`<sup>Optional</sup> <a name="visibleToAllUsersInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput"></a>

```typescript
public readonly visibleToAllUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: string;
```

- *Type:* string

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applications"></a>

```typescript
public readonly applications: string[];
```

- *Type:* string[]

---

##### `autoscalingRole`<sup>Required</sup> <a name="autoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole"></a>

```typescript
public readonly autoscalingRole: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations"></a>

```typescript
public readonly configurations: string;
```

- *Type:* string

---

##### `configurationsJson`<sup>Required</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson"></a>

```typescript
public readonly configurationsJson: string;
```

- *Type:* string

---

##### `customAmiId`<sup>Required</sup> <a name="customAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId"></a>

```typescript
public readonly customAmiId: string;
```

- *Type:* string

---

##### `ebsRootVolumeSize`<sup>Required</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize"></a>

```typescript
public readonly ebsRootVolumeSize: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keepJobFlowAliveWhenNoSteps`<sup>Required</sup> <a name="keepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps"></a>

```typescript
public readonly keepJobFlowAliveWhenNoSteps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `listStepsStates`<sup>Required</sup> <a name="listStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates"></a>

```typescript
public readonly listStepsStates: string[];
```

- *Type:* string[]

---

##### `logEncryptionKmsKeyId`<sup>Required</sup> <a name="logEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId"></a>

```typescript
public readonly logEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

---

##### `scaleDownBehavior`<sup>Required</sup> <a name="scaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior"></a>

```typescript
public readonly scaleDownBehavior: string;
```

- *Type:* string

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `stepConcurrencyLevel`<sup>Required</sup> <a name="stepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel"></a>

```typescript
public readonly stepConcurrencyLevel: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibleToAllUsers`<sup>Required</sup> <a name="visibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers"></a>

```typescript
public readonly visibleToAllUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrClusterAutoTerminationPolicy <a name="EmrClusterAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterAutoTerminationPolicy: emrCluster.EmrClusterAutoTerminationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}.

---

### EmrClusterBootstrapAction <a name="EmrClusterBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterBootstrapAction: emrCluster.EmrClusterBootstrapAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

### EmrClusterConfig <a name="EmrClusterConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterConfig: emrCluster.EmrClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole">serviceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo">additionalInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications">applications</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole">autoscalingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy">autoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | auto_termination_policy block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction">bootstrapAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]</code> | bootstrap_action block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations">configurations</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson">configurationsJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet">coreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | core_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup">coreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | core_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId">customAmiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes">ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | ec2_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps">keepJobFlowAliveWhenNoSteps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes">kerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | kerberos_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates">listStepsStates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId">logEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri">logUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet">masterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | master_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup">masterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | master_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior">scaleDownBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step">step</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel">stepConcurrencyLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection">terminationProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}.

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications"></a>

```typescript
public readonly applications: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}.

---

##### `autoscalingRole`<sup>Optional</sup> <a name="autoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole"></a>

```typescript
public readonly autoscalingRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}.

---

##### `autoTerminationPolicy`<sup>Optional</sup> <a name="autoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy"></a>

```typescript
public readonly autoTerminationPolicy: EmrClusterAutoTerminationPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

auto_termination_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}

---

##### `bootstrapAction`<sup>Optional</sup> <a name="bootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction"></a>

```typescript
public readonly bootstrapAction: IResolvable | EmrClusterBootstrapAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]

bootstrap_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations"></a>

```typescript
public readonly configurations: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}.

---

##### `configurationsJson`<sup>Optional</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson"></a>

```typescript
public readonly configurationsJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}.

---

##### `coreInstanceFleet`<sup>Optional</sup> <a name="coreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet"></a>

```typescript
public readonly coreInstanceFleet: EmrClusterCoreInstanceFleet;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

core_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}

---

##### `coreInstanceGroup`<sup>Optional</sup> <a name="coreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup"></a>

```typescript
public readonly coreInstanceGroup: EmrClusterCoreInstanceGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

core_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}

---

##### `customAmiId`<sup>Optional</sup> <a name="customAmiId" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId"></a>

```typescript
public readonly customAmiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}.

---

##### `ebsRootVolumeSize`<sup>Optional</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize"></a>

```typescript
public readonly ebsRootVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.

---

##### `ec2Attributes`<sup>Optional</sup> <a name="ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes"></a>

```typescript
public readonly ec2Attributes: EmrClusterEc2Attributes;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

ec2_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepJobFlowAliveWhenNoSteps`<sup>Optional</sup> <a name="keepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps"></a>

```typescript
public readonly keepJobFlowAliveWhenNoSteps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.

---

##### `kerberosAttributes`<sup>Optional</sup> <a name="kerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes"></a>

```typescript
public readonly kerberosAttributes: EmrClusterKerberosAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

kerberos_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}

---

##### `listStepsStates`<sup>Optional</sup> <a name="listStepsStates" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates"></a>

```typescript
public readonly listStepsStates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}.

---

##### `logEncryptionKmsKeyId`<sup>Optional</sup> <a name="logEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId"></a>

```typescript
public readonly logEncryptionKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}.

---

##### `masterInstanceFleet`<sup>Optional</sup> <a name="masterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet"></a>

```typescript
public readonly masterInstanceFleet: EmrClusterMasterInstanceFleet;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

master_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}

---

##### `masterInstanceGroup`<sup>Optional</sup> <a name="masterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup"></a>

```typescript
public readonly masterInstanceGroup: EmrClusterMasterInstanceGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

master_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}

---

##### `scaleDownBehavior`<sup>Optional</sup> <a name="scaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior"></a>

```typescript
public readonly scaleDownBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}.

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step"></a>

```typescript
public readonly step: IResolvable | EmrClusterStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}.

---

##### `stepConcurrencyLevel`<sup>Optional</sup> <a name="stepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel"></a>

```typescript
public readonly stepConcurrencyLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}.

---

##### `visibleToAllUsers`<sup>Optional</sup> <a name="visibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers"></a>

```typescript
public readonly visibleToAllUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}.

---

### EmrClusterCoreInstanceFleet <a name="EmrClusterCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleet: emrCluster.EmrClusterCoreInstanceFleet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `instanceTypeConfigs`<sup>Optional</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs"></a>

```typescript
public readonly instanceTypeConfigs: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `launchSpecifications`<sup>Optional</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications"></a>

```typescript
public readonly launchSpecifications: EmrClusterCoreInstanceFleetLaunchSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `targetOnDemandCapacity`<sup>Optional</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity"></a>

```typescript
public readonly targetOnDemandCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `targetSpotCapacity`<sup>Optional</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity"></a>

```typescript
public readonly targetSpotCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigs <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleetInstanceTypeConfigs: emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice">bidPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```typescript
public readonly bidPriceAsPercentageOfOnDemandPrice: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```typescript
public readonly configurations: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations: emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig: emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterCoreInstanceFleetLaunchSpecifications <a name="EmrClusterCoreInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleetLaunchSpecifications: emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification">onDemandSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification">spotSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]</code> | spot_specification block. |

---

##### `onDemandSpecification`<sup>Optional</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```typescript
public readonly onDemandSpecification: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `spotSpecification`<sup>Optional</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```typescript
public readonly spotSpecification: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification: emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification: emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```typescript
public readonly timeoutDurationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterCoreInstanceGroup <a name="EmrClusterCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceGroup: emrCluster.EmrClusterCoreInstanceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice">bidPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig">ebsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `autoscalingPolicy`<sup>Optional</sup> <a name="autoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: IResolvable | EmrClusterCoreInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterCoreInstanceGroupEbsConfig <a name="EmrClusterCoreInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterCoreInstanceGroupEbsConfig: emrCluster.EmrClusterCoreInstanceGroupEbsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterEc2Attributes <a name="EmrClusterEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterEc2Attributes: emrCluster.EmrClusterEc2Attributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile">instanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups">additionalMasterSecurityGroups</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups">additionalSlaveSecurityGroups</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup">emrManagedMasterSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup">emrManagedSlaveSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}. |

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}.

---

##### `additionalMasterSecurityGroups`<sup>Optional</sup> <a name="additionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups"></a>

```typescript
public readonly additionalMasterSecurityGroups: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}.

---

##### `additionalSlaveSecurityGroups`<sup>Optional</sup> <a name="additionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups"></a>

```typescript
public readonly additionalSlaveSecurityGroups: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}.

---

##### `emrManagedMasterSecurityGroup`<sup>Optional</sup> <a name="emrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup"></a>

```typescript
public readonly emrManagedMasterSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}.

---

##### `emrManagedSlaveSecurityGroup`<sup>Optional</sup> <a name="emrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup"></a>

```typescript
public readonly emrManagedSlaveSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}.

---

##### `serviceAccessSecurityGroup`<sup>Optional</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup"></a>

```typescript
public readonly serviceAccessSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}.

---

### EmrClusterKerberosAttributes <a name="EmrClusterKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterKerberosAttributes: emrCluster.EmrClusterKerberosAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword">kdcAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm">realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword">adDomainJoinPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser">adDomainJoinUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword">crossRealmTrustPrincipalPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}. |

---

##### `kdcAdminPassword`<sup>Required</sup> <a name="kdcAdminPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword"></a>

```typescript
public readonly kdcAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}.

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}.

---

##### `adDomainJoinPassword`<sup>Optional</sup> <a name="adDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword"></a>

```typescript
public readonly adDomainJoinPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}.

---

##### `adDomainJoinUser`<sup>Optional</sup> <a name="adDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser"></a>

```typescript
public readonly adDomainJoinUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}.

---

##### `crossRealmTrustPrincipalPassword`<sup>Optional</sup> <a name="crossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword"></a>

```typescript
public readonly crossRealmTrustPrincipalPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}.

---

### EmrClusterMasterInstanceFleet <a name="EmrClusterMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleet: emrCluster.EmrClusterMasterInstanceFleet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `instanceTypeConfigs`<sup>Optional</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs"></a>

```typescript
public readonly instanceTypeConfigs: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `launchSpecifications`<sup>Optional</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications"></a>

```typescript
public readonly launchSpecifications: EmrClusterMasterInstanceFleetLaunchSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `targetOnDemandCapacity`<sup>Optional</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity"></a>

```typescript
public readonly targetOnDemandCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `targetSpotCapacity`<sup>Optional</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity"></a>

```typescript
public readonly targetSpotCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigs <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleetInstanceTypeConfigs: emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice">bidPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```typescript
public readonly bidPriceAsPercentageOfOnDemandPrice: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```typescript
public readonly configurations: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations: emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig: emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterMasterInstanceFleetLaunchSpecifications <a name="EmrClusterMasterInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleetLaunchSpecifications: emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification">onDemandSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification">spotSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]</code> | spot_specification block. |

---

##### `onDemandSpecification`<sup>Optional</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```typescript
public readonly onDemandSpecification: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `spotSpecification`<sup>Optional</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```typescript
public readonly spotSpecification: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification: emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification: emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```typescript
public readonly timeoutDurationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterMasterInstanceGroup <a name="EmrClusterMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceGroup: emrCluster.EmrClusterMasterInstanceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice">bidPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig">ebsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: IResolvable | EmrClusterMasterInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterMasterInstanceGroupEbsConfig <a name="EmrClusterMasterInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterMasterInstanceGroupEbsConfig: emrCluster.EmrClusterMasterInstanceGroupEbsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterStep <a name="EmrClusterStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterStep: emrCluster.EmrClusterStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep">hadoopJarStep</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `actionOnFailure`<sup>Optional</sup> <a name="actionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}.

---

##### `hadoopJarStep`<sup>Optional</sup> <a name="hadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep"></a>

```typescript
public readonly hadoopJarStep: IResolvable | EmrClusterStepHadoopJarStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterStepHadoopJarStep <a name="EmrClusterStepHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

const emrClusterStepHadoopJarStep: emrCluster.EmrClusterStepHadoopJarStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar">jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass">mainClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}.

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrClusterAutoTerminationPolicyOutputReference <a name="EmrClusterAutoTerminationPolicyOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterAutoTerminationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: number;
```

- *Type:* number

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterAutoTerminationPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---


### EmrClusterBootstrapActionList <a name="EmrClusterBootstrapActionList" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterBootstrapActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get"></a>

```typescript
public get(index: number): EmrClusterBootstrapActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterBootstrapAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>[]

---


### EmrClusterBootstrapActionOutputReference <a name="EmrClusterBootstrapActionOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterBootstrapActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterBootstrapAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```typescript
public get(index: number): EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```typescript
public resetClassification(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```typescript
public get(index: number): EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get"></a>

```typescript
public get(index: number): EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">resetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```typescript
public putConfigurations(value: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]

---

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```typescript
public putEbsConfig(value: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

---

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```typescript
public resetBidPrice(): void
```

##### `resetBidPriceAsPercentageOfOnDemandPrice` <a name="resetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```typescript
public resetBidPriceAsPercentageOfOnDemandPrice(): void
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```typescript
public resetConfigurations(): void
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```typescript
public resetEbsConfig(): void
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```typescript
public resetWeightedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bidPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```typescript
public readonly bidPriceAsPercentageOfOnDemandPriceInput: number;
```

- *Type:* number

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```typescript
public readonly bidPriceInput: string;
```

- *Type:* string

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```typescript
public readonly configurationsInput: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>[]

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```typescript
public readonly ebsConfigInput: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: number;
```

- *Type:* number

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```typescript
public readonly bidPriceAsPercentageOfOnDemandPrice: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleetInstanceTypeConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```typescript
public get(index: number): EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">putOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">putSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">resetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">resetSpotSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnDemandSpecification` <a name="putOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```typescript
public putOnDemandSpecification(value: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

---

##### `putSpotSpecification` <a name="putSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```typescript
public putSpotSpecification(value: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

---

##### `resetOnDemandSpecification` <a name="resetOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```typescript
public resetOnDemandSpecification(): void
```

##### `resetSpotSpecification` <a name="resetSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```typescript
public resetSpotSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">onDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">onDemandSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spotSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDemandSpecification`<sup>Required</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```typescript
public readonly onDemandSpecification: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spotSpecification`<sup>Required</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```typescript
public readonly spotSpecification: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `onDemandSpecificationInput`<sup>Optional</sup> <a name="onDemandSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```typescript
public readonly onDemandSpecificationInput: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

---

##### `spotSpecificationInput`<sup>Optional</sup> <a name="spotSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```typescript
public readonly spotSpecificationInput: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleetLaunchSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```typescript
public get(index: number): EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```typescript
public resetBlockDurationMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeoutDurationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```typescript
public readonly blockDurationMinutesInput: number;
```

- *Type:* number

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```typescript
public readonly timeoutActionInput: string;
```

- *Type:* string

---

##### `timeoutDurationMinutesInput`<sup>Optional</sup> <a name="timeoutDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```typescript
public readonly timeoutDurationMinutesInput: number;
```

- *Type:* number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```typescript
public readonly timeoutDurationMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetOutputReference <a name="EmrClusterCoreInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs">putInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications">putLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs">resetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications">resetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity">resetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity">resetTargetSpotCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceTypeConfigs` <a name="putInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```typescript
public putInstanceTypeConfigs(value: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]

---

##### `putLaunchSpecifications` <a name="putLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications"></a>

```typescript
public putLaunchSpecifications(value: EmrClusterCoreInstanceFleetLaunchSpecifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `resetInstanceTypeConfigs` <a name="resetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```typescript
public resetInstanceTypeConfigs(): void
```

##### `resetLaunchSpecifications` <a name="resetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```typescript
public resetLaunchSpecifications(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTargetOnDemandCapacity` <a name="resetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```typescript
public resetTargetOnDemandCapacity(): void
```

##### `resetTargetSpotCapacity` <a name="resetTargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```typescript
public resetTargetSpotCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity">provisionedOnDemandCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity">provisionedSpotCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput">instanceTypeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput">launchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput">targetOnDemandCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput">targetSpotCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTypeConfigs`<sup>Required</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```typescript
public readonly instanceTypeConfigs: EmrClusterCoreInstanceFleetInstanceTypeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a>

---

##### `launchSpecifications`<sup>Required</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications"></a>

```typescript
public readonly launchSpecifications: EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisionedOnDemandCapacity`<sup>Required</sup> <a name="provisionedOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```typescript
public readonly provisionedOnDemandCapacity: number;
```

- *Type:* number

---

##### `provisionedSpotCapacity`<sup>Required</sup> <a name="provisionedSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```typescript
public readonly provisionedSpotCapacity: number;
```

- *Type:* number

---

##### `instanceTypeConfigsInput`<sup>Optional</sup> <a name="instanceTypeConfigsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```typescript
public readonly instanceTypeConfigsInput: IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>[]

---

##### `launchSpecificationsInput`<sup>Optional</sup> <a name="launchSpecificationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```typescript
public readonly launchSpecificationsInput: EmrClusterCoreInstanceFleetLaunchSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetOnDemandCapacityInput`<sup>Optional</sup> <a name="targetOnDemandCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```typescript
public readonly targetOnDemandCapacityInput: number;
```

- *Type:* number

---

##### `targetSpotCapacityInput`<sup>Optional</sup> <a name="targetSpotCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```typescript
public readonly targetSpotCapacityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetOnDemandCapacity`<sup>Required</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```typescript
public readonly targetOnDemandCapacity: number;
```

- *Type:* number

---

##### `targetSpotCapacity`<sup>Required</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```typescript
public readonly targetSpotCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceFleet;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---


### EmrClusterCoreInstanceGroupEbsConfigList <a name="EmrClusterCoreInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceGroupEbsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get"></a>

```typescript
public get(index: number): EmrClusterCoreInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterCoreInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]

---


### EmrClusterCoreInstanceGroupEbsConfigOutputReference <a name="EmrClusterCoreInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceGroupEbsConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a> | cdktf.IResolvable

---


### EmrClusterCoreInstanceGroupOutputReference <a name="EmrClusterCoreInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterCoreInstanceGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy">resetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig"></a>

```typescript
public putEbsConfig(value: IResolvable | EmrClusterCoreInstanceGroupEbsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]

---

##### `resetAutoscalingPolicy` <a name="resetAutoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy"></a>

```typescript
public resetAutoscalingPolicy(): void
```

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice"></a>

```typescript
public resetBidPrice(): void
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig"></a>

```typescript
public resetEbsConfig(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice">bidPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: EmrClusterCoreInstanceGroupEbsConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput"></a>

```typescript
public readonly autoscalingPolicyInput: string;
```

- *Type:* string

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput"></a>

```typescript
public readonly bidPriceInput: string;
```

- *Type:* string

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput"></a>

```typescript
public readonly ebsConfigInput: IResolvable | EmrClusterCoreInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>[]

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: string;
```

- *Type:* string

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterCoreInstanceGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---


### EmrClusterEc2AttributesOutputReference <a name="EmrClusterEc2AttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterEc2AttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups">resetAdditionalMasterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups">resetAdditionalSlaveSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup">resetEmrManagedMasterSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup">resetEmrManagedSlaveSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup">resetServiceAccessSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalMasterSecurityGroups` <a name="resetAdditionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups"></a>

```typescript
public resetAdditionalMasterSecurityGroups(): void
```

##### `resetAdditionalSlaveSecurityGroups` <a name="resetAdditionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups"></a>

```typescript
public resetAdditionalSlaveSecurityGroups(): void
```

##### `resetEmrManagedMasterSecurityGroup` <a name="resetEmrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup"></a>

```typescript
public resetEmrManagedMasterSecurityGroup(): void
```

##### `resetEmrManagedSlaveSecurityGroup` <a name="resetEmrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup"></a>

```typescript
public resetEmrManagedSlaveSecurityGroup(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetServiceAccessSecurityGroup` <a name="resetServiceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup"></a>

```typescript
public resetServiceAccessSecurityGroup(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput">additionalMasterSecurityGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput">additionalSlaveSecurityGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput">emrManagedMasterSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput">emrManagedSlaveSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput">instanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput">serviceAccessSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups">additionalMasterSecurityGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups">additionalSlaveSecurityGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup">emrManagedMasterSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup">emrManagedSlaveSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile">instanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalMasterSecurityGroupsInput`<sup>Optional</sup> <a name="additionalMasterSecurityGroupsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput"></a>

```typescript
public readonly additionalMasterSecurityGroupsInput: string;
```

- *Type:* string

---

##### `additionalSlaveSecurityGroupsInput`<sup>Optional</sup> <a name="additionalSlaveSecurityGroupsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput"></a>

```typescript
public readonly additionalSlaveSecurityGroupsInput: string;
```

- *Type:* string

---

##### `emrManagedMasterSecurityGroupInput`<sup>Optional</sup> <a name="emrManagedMasterSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput"></a>

```typescript
public readonly emrManagedMasterSecurityGroupInput: string;
```

- *Type:* string

---

##### `emrManagedSlaveSecurityGroupInput`<sup>Optional</sup> <a name="emrManagedSlaveSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput"></a>

```typescript
public readonly emrManagedSlaveSecurityGroupInput: string;
```

- *Type:* string

---

##### `instanceProfileInput`<sup>Optional</sup> <a name="instanceProfileInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput"></a>

```typescript
public readonly instanceProfileInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `serviceAccessSecurityGroupInput`<sup>Optional</sup> <a name="serviceAccessSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput"></a>

```typescript
public readonly serviceAccessSecurityGroupInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `additionalMasterSecurityGroups`<sup>Required</sup> <a name="additionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups"></a>

```typescript
public readonly additionalMasterSecurityGroups: string;
```

- *Type:* string

---

##### `additionalSlaveSecurityGroups`<sup>Required</sup> <a name="additionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups"></a>

```typescript
public readonly additionalSlaveSecurityGroups: string;
```

- *Type:* string

---

##### `emrManagedMasterSecurityGroup`<sup>Required</sup> <a name="emrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup"></a>

```typescript
public readonly emrManagedMasterSecurityGroup: string;
```

- *Type:* string

---

##### `emrManagedSlaveSecurityGroup`<sup>Required</sup> <a name="emrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup"></a>

```typescript
public readonly emrManagedSlaveSecurityGroup: string;
```

- *Type:* string

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `serviceAccessSecurityGroup`<sup>Required</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup"></a>

```typescript
public readonly serviceAccessSecurityGroup: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterEc2Attributes;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---


### EmrClusterKerberosAttributesOutputReference <a name="EmrClusterKerberosAttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterKerberosAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword">resetAdDomainJoinPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser">resetAdDomainJoinUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword">resetCrossRealmTrustPrincipalPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdDomainJoinPassword` <a name="resetAdDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword"></a>

```typescript
public resetAdDomainJoinPassword(): void
```

##### `resetAdDomainJoinUser` <a name="resetAdDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser"></a>

```typescript
public resetAdDomainJoinUser(): void
```

##### `resetCrossRealmTrustPrincipalPassword` <a name="resetCrossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword"></a>

```typescript
public resetCrossRealmTrustPrincipalPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput">adDomainJoinPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput">adDomainJoinUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput">crossRealmTrustPrincipalPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput">kdcAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput">realmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword">adDomainJoinPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser">adDomainJoinUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword">crossRealmTrustPrincipalPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword">kdcAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adDomainJoinPasswordInput`<sup>Optional</sup> <a name="adDomainJoinPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput"></a>

```typescript
public readonly adDomainJoinPasswordInput: string;
```

- *Type:* string

---

##### `adDomainJoinUserInput`<sup>Optional</sup> <a name="adDomainJoinUserInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput"></a>

```typescript
public readonly adDomainJoinUserInput: string;
```

- *Type:* string

---

##### `crossRealmTrustPrincipalPasswordInput`<sup>Optional</sup> <a name="crossRealmTrustPrincipalPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput"></a>

```typescript
public readonly crossRealmTrustPrincipalPasswordInput: string;
```

- *Type:* string

---

##### `kdcAdminPasswordInput`<sup>Optional</sup> <a name="kdcAdminPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput"></a>

```typescript
public readonly kdcAdminPasswordInput: string;
```

- *Type:* string

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput"></a>

```typescript
public readonly realmInput: string;
```

- *Type:* string

---

##### `adDomainJoinPassword`<sup>Required</sup> <a name="adDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword"></a>

```typescript
public readonly adDomainJoinPassword: string;
```

- *Type:* string

---

##### `adDomainJoinUser`<sup>Required</sup> <a name="adDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser"></a>

```typescript
public readonly adDomainJoinUser: string;
```

- *Type:* string

---

##### `crossRealmTrustPrincipalPassword`<sup>Required</sup> <a name="crossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword"></a>

```typescript
public readonly crossRealmTrustPrincipalPassword: string;
```

- *Type:* string

---

##### `kdcAdminPassword`<sup>Required</sup> <a name="kdcAdminPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword"></a>

```typescript
public readonly kdcAdminPassword: string;
```

- *Type:* string

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterKerberosAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```typescript
public get(index: number): EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```typescript
public resetClassification(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a> | cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```typescript
public get(index: number): EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a> | cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get"></a>

```typescript
public get(index: number): EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">resetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```typescript
public putConfigurations(value: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]

---

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```typescript
public putEbsConfig(value: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

---

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```typescript
public resetBidPrice(): void
```

##### `resetBidPriceAsPercentageOfOnDemandPrice` <a name="resetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```typescript
public resetBidPriceAsPercentageOfOnDemandPrice(): void
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```typescript
public resetConfigurations(): void
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```typescript
public resetEbsConfig(): void
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```typescript
public resetWeightedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bidPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```typescript
public readonly bidPriceAsPercentageOfOnDemandPriceInput: number;
```

- *Type:* number

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```typescript
public readonly bidPriceInput: string;
```

- *Type:* string

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```typescript
public readonly configurationsInput: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>[]

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```typescript
public readonly ebsConfigInput: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>[]

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: number;
```

- *Type:* number

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```typescript
public readonly bidPriceAsPercentageOfOnDemandPrice: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleetInstanceTypeConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a> | cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```typescript
public get(index: number): EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a> | cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">putOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">putSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">resetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">resetSpotSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnDemandSpecification` <a name="putOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```typescript
public putOnDemandSpecification(value: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

---

##### `putSpotSpecification` <a name="putSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```typescript
public putSpotSpecification(value: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

---

##### `resetOnDemandSpecification` <a name="resetOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```typescript
public resetOnDemandSpecification(): void
```

##### `resetSpotSpecification` <a name="resetSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```typescript
public resetSpotSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">onDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">onDemandSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spotSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDemandSpecification`<sup>Required</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```typescript
public readonly onDemandSpecification: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spotSpecification`<sup>Required</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```typescript
public readonly spotSpecification: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `onDemandSpecificationInput`<sup>Optional</sup> <a name="onDemandSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```typescript
public readonly onDemandSpecificationInput: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>[]

---

##### `spotSpecificationInput`<sup>Optional</sup> <a name="spotSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```typescript
public readonly spotSpecificationInput: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleetLaunchSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```typescript
public get(index: number): EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>[]

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```typescript
public resetBlockDurationMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeoutDurationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```typescript
public readonly blockDurationMinutesInput: number;
```

- *Type:* number

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```typescript
public readonly timeoutActionInput: string;
```

- *Type:* string

---

##### `timeoutDurationMinutesInput`<sup>Optional</sup> <a name="timeoutDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```typescript
public readonly timeoutDurationMinutesInput: number;
```

- *Type:* number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```typescript
public readonly timeoutDurationMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a> | cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetOutputReference <a name="EmrClusterMasterInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs">putInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications">putLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs">resetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications">resetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity">resetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity">resetTargetSpotCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceTypeConfigs` <a name="putInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```typescript
public putInstanceTypeConfigs(value: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]

---

##### `putLaunchSpecifications` <a name="putLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications"></a>

```typescript
public putLaunchSpecifications(value: EmrClusterMasterInstanceFleetLaunchSpecifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `resetInstanceTypeConfigs` <a name="resetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```typescript
public resetInstanceTypeConfigs(): void
```

##### `resetLaunchSpecifications` <a name="resetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```typescript
public resetLaunchSpecifications(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTargetOnDemandCapacity` <a name="resetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```typescript
public resetTargetOnDemandCapacity(): void
```

##### `resetTargetSpotCapacity` <a name="resetTargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```typescript
public resetTargetSpotCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity">provisionedOnDemandCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity">provisionedSpotCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput">instanceTypeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput">launchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput">targetOnDemandCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput">targetSpotCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTypeConfigs`<sup>Required</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```typescript
public readonly instanceTypeConfigs: EmrClusterMasterInstanceFleetInstanceTypeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a>

---

##### `launchSpecifications`<sup>Required</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications"></a>

```typescript
public readonly launchSpecifications: EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisionedOnDemandCapacity`<sup>Required</sup> <a name="provisionedOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```typescript
public readonly provisionedOnDemandCapacity: number;
```

- *Type:* number

---

##### `provisionedSpotCapacity`<sup>Required</sup> <a name="provisionedSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```typescript
public readonly provisionedSpotCapacity: number;
```

- *Type:* number

---

##### `instanceTypeConfigsInput`<sup>Optional</sup> <a name="instanceTypeConfigsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```typescript
public readonly instanceTypeConfigsInput: IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>[]

---

##### `launchSpecificationsInput`<sup>Optional</sup> <a name="launchSpecificationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```typescript
public readonly launchSpecificationsInput: EmrClusterMasterInstanceFleetLaunchSpecifications;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetOnDemandCapacityInput`<sup>Optional</sup> <a name="targetOnDemandCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```typescript
public readonly targetOnDemandCapacityInput: number;
```

- *Type:* number

---

##### `targetSpotCapacityInput`<sup>Optional</sup> <a name="targetSpotCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```typescript
public readonly targetSpotCapacityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetOnDemandCapacity`<sup>Required</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```typescript
public readonly targetOnDemandCapacity: number;
```

- *Type:* number

---

##### `targetSpotCapacity`<sup>Required</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```typescript
public readonly targetSpotCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceFleet;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---


### EmrClusterMasterInstanceGroupEbsConfigList <a name="EmrClusterMasterInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceGroupEbsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get"></a>

```typescript
public get(index: number): EmrClusterMasterInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterMasterInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]

---


### EmrClusterMasterInstanceGroupEbsConfigOutputReference <a name="EmrClusterMasterInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceGroupEbsConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a> | cdktf.IResolvable

---


### EmrClusterMasterInstanceGroupOutputReference <a name="EmrClusterMasterInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterMasterInstanceGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig"></a>

```typescript
public putEbsConfig(value: IResolvable | EmrClusterMasterInstanceGroupEbsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]

---

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice"></a>

```typescript
public resetBidPrice(): void
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig"></a>

```typescript
public resetEbsConfig(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice">bidPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: EmrClusterMasterInstanceGroupEbsConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput"></a>

```typescript
public readonly bidPriceInput: string;
```

- *Type:* string

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput"></a>

```typescript
public readonly ebsConfigInput: IResolvable | EmrClusterMasterInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>[]

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterMasterInstanceGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---


### EmrClusterStepHadoopJarStepList <a name="EmrClusterStepHadoopJarStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterStepHadoopJarStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get"></a>

```typescript
public get(index: number): EmrClusterStepHadoopJarStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterStepHadoopJarStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]

---


### EmrClusterStepHadoopJarStepOutputReference <a name="EmrClusterStepHadoopJarStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterStepHadoopJarStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar"></a>

```typescript
public resetJar(): void
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass"></a>

```typescript
public resetMainClass(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput">jarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar">jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass">mainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput"></a>

```typescript
public readonly jarInput: string;
```

- *Type:* string

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```typescript
public readonly mainClassInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterStepHadoopJarStep | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a> | cdktf.IResolvable

---


### EmrClusterStepList <a name="EmrClusterStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get"></a>

```typescript
public get(index: number): EmrClusterStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrClusterStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>[]

---


### EmrClusterStepOutputReference <a name="EmrClusterStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer"></a>

```typescript
import { emrCluster } from '@cdktf/provider-aws'

new emrCluster.EmrClusterStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep">putHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure">resetActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep">resetHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHadoopJarStep` <a name="putHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep"></a>

```typescript
public putHadoopJarStep(value: IResolvable | EmrClusterStepHadoopJarStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]

---

##### `resetActionOnFailure` <a name="resetActionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure"></a>

```typescript
public resetActionOnFailure(): void
```

##### `resetHadoopJarStep` <a name="resetHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep"></a>

```typescript
public resetHadoopJarStep(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput">actionOnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput">hadoopJarStepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep"></a>

```typescript
public readonly hadoopJarStep: EmrClusterStepHadoopJarStepList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a>

---

##### `actionOnFailureInput`<sup>Optional</sup> <a name="actionOnFailureInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput"></a>

```typescript
public readonly actionOnFailureInput: string;
```

- *Type:* string

---

##### `hadoopJarStepInput`<sup>Optional</sup> <a name="hadoopJarStepInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput"></a>

```typescript
public readonly hadoopJarStepInput: IResolvable | EmrClusterStepHadoopJarStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrClusterStep | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a> | cdktf.IResolvable

---



