# `emrCluster` Submodule <a name="`emrCluster` Submodule" id="@cdktf/provider-aws.emrCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrCluster <a name="EmrCluster" id="@cdktf/provider-aws.emrCluster.EmrCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster aws_emr_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrCluster(scope Construct, id *string, config EmrClusterConfig) EmrCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig">EmrClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig">EmrClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy">PutAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction">PutBootstrapAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet">PutCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup">PutCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes">PutEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes">PutKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet">PutMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup">PutMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo">ResetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications">ResetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole">ResetAutoscalingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy">ResetAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction">ResetBootstrapAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson">ResetConfigurationsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet">ResetCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup">ResetCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId">ResetCustomAmiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize">ResetEbsRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes">ResetEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps">ResetKeepJobFlowAliveWhenNoSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes">ResetKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates">ResetListStepsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId">ResetLogEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri">ResetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet">ResetMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup">ResetMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior">ResetScaleDownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStep">ResetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel">ResetStepConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection">ResetTerminationProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers">ResetVisibleToAllUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoTerminationPolicy` <a name="PutAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy"></a>

```go
func PutAutoTerminationPolicy(value EmrClusterAutoTerminationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `PutBootstrapAction` <a name="PutBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction"></a>

```go
func PutBootstrapAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCoreInstanceFleet` <a name="PutCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet"></a>

```go
func PutCoreInstanceFleet(value EmrClusterCoreInstanceFleet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `PutCoreInstanceGroup` <a name="PutCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup"></a>

```go
func PutCoreInstanceGroup(value EmrClusterCoreInstanceGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `PutEc2Attributes` <a name="PutEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes"></a>

```go
func PutEc2Attributes(value EmrClusterEc2Attributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `PutKerberosAttributes` <a name="PutKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes"></a>

```go
func PutKerberosAttributes(value EmrClusterKerberosAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `PutMasterInstanceFleet` <a name="PutMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet"></a>

```go
func PutMasterInstanceFleet(value EmrClusterMasterInstanceFleet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `PutMasterInstanceGroup` <a name="PutMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup"></a>

```go
func PutMasterInstanceGroup(value EmrClusterMasterInstanceGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `PutStep` <a name="PutStep" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep"></a>

```go
func PutStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalInfo` <a name="ResetAdditionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo"></a>

```go
func ResetAdditionalInfo()
```

##### `ResetApplications` <a name="ResetApplications" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications"></a>

```go
func ResetApplications()
```

##### `ResetAutoscalingRole` <a name="ResetAutoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole"></a>

```go
func ResetAutoscalingRole()
```

##### `ResetAutoTerminationPolicy` <a name="ResetAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy"></a>

```go
func ResetAutoTerminationPolicy()
```

##### `ResetBootstrapAction` <a name="ResetBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction"></a>

```go
func ResetBootstrapAction()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations"></a>

```go
func ResetConfigurations()
```

##### `ResetConfigurationsJson` <a name="ResetConfigurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson"></a>

```go
func ResetConfigurationsJson()
```

##### `ResetCoreInstanceFleet` <a name="ResetCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet"></a>

```go
func ResetCoreInstanceFleet()
```

##### `ResetCoreInstanceGroup` <a name="ResetCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup"></a>

```go
func ResetCoreInstanceGroup()
```

##### `ResetCustomAmiId` <a name="ResetCustomAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId"></a>

```go
func ResetCustomAmiId()
```

##### `ResetEbsRootVolumeSize` <a name="ResetEbsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize"></a>

```go
func ResetEbsRootVolumeSize()
```

##### `ResetEc2Attributes` <a name="ResetEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes"></a>

```go
func ResetEc2Attributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKeepJobFlowAliveWhenNoSteps` <a name="ResetKeepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps"></a>

```go
func ResetKeepJobFlowAliveWhenNoSteps()
```

##### `ResetKerberosAttributes` <a name="ResetKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes"></a>

```go
func ResetKerberosAttributes()
```

##### `ResetListStepsStates` <a name="ResetListStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates"></a>

```go
func ResetListStepsStates()
```

##### `ResetLogEncryptionKmsKeyId` <a name="ResetLogEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId"></a>

```go
func ResetLogEncryptionKmsKeyId()
```

##### `ResetLogUri` <a name="ResetLogUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri"></a>

```go
func ResetLogUri()
```

##### `ResetMasterInstanceFleet` <a name="ResetMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet"></a>

```go
func ResetMasterInstanceFleet()
```

##### `ResetMasterInstanceGroup` <a name="ResetMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup"></a>

```go
func ResetMasterInstanceGroup()
```

##### `ResetScaleDownBehavior` <a name="ResetScaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior"></a>

```go
func ResetScaleDownBehavior()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetStep` <a name="ResetStep" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStep"></a>

```go
func ResetStep()
```

##### `ResetStepConcurrencyLevel` <a name="ResetStepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel"></a>

```go
func ResetStepConcurrencyLevel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTerminationProtection` <a name="ResetTerminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection"></a>

```go
func ResetTerminationProtection()
```

##### `ResetVisibleToAllUsers` <a name="ResetVisibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers"></a>

```go
func ResetVisibleToAllUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.EmrCluster_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.EmrCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.EmrCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy">AutoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction">BootstrapAction</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState">ClusterState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet">CoreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup">CoreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes">Ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes">KerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet">MasterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup">MasterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns">MasterPublicDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.step">Step</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput">AdditionalInfoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput">ApplicationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput">AutoscalingRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput">AutoTerminationPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput">BootstrapActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput">ConfigurationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput">ConfigurationsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput">CoreInstanceFleetInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput">CoreInstanceGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput">CustomAmiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput">EbsRootVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput">Ec2AttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput">KeepJobFlowAliveWhenNoStepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput">KerberosAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput">ListStepsStatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput">LogEncryptionKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput">LogUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput">MasterInstanceFleetInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput">MasterInstanceGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput">ScaleDownBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput">StepConcurrencyLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput">StepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput">TerminationProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput">VisibleToAllUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo">AdditionalInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applications">Applications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole">AutoscalingRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations">Configurations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson">ConfigurationsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId">CustomAmiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize">EbsRootVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps">KeepJobFlowAliveWhenNoSteps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates">ListStepsStates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId">LogEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri">LogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior">ScaleDownBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel">StepConcurrencyLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers">VisibleToAllUsers</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoTerminationPolicy`<sup>Required</sup> <a name="AutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy"></a>

```go
func AutoTerminationPolicy() EmrClusterAutoTerminationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a>

---

##### `BootstrapAction`<sup>Required</sup> <a name="BootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction"></a>

```go
func BootstrapAction() EmrClusterBootstrapActionList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a>

---

##### `ClusterState`<sup>Required</sup> <a name="ClusterState" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState"></a>

```go
func ClusterState() *string
```

- *Type:* *string

---

##### `CoreInstanceFleet`<sup>Required</sup> <a name="CoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet"></a>

```go
func CoreInstanceFleet() EmrClusterCoreInstanceFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a>

---

##### `CoreInstanceGroup`<sup>Required</sup> <a name="CoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup"></a>

```go
func CoreInstanceGroup() EmrClusterCoreInstanceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a>

---

##### `Ec2Attributes`<sup>Required</sup> <a name="Ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes"></a>

```go
func Ec2Attributes() EmrClusterEc2AttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a>

---

##### `KerberosAttributes`<sup>Required</sup> <a name="KerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes"></a>

```go
func KerberosAttributes() EmrClusterKerberosAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a>

---

##### `MasterInstanceFleet`<sup>Required</sup> <a name="MasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet"></a>

```go
func MasterInstanceFleet() EmrClusterMasterInstanceFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a>

---

##### `MasterInstanceGroup`<sup>Required</sup> <a name="MasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup"></a>

```go
func MasterInstanceGroup() EmrClusterMasterInstanceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a>

---

##### `MasterPublicDns`<sup>Required</sup> <a name="MasterPublicDns" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns"></a>

```go
func MasterPublicDns() *string
```

- *Type:* *string

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.step"></a>

```go
func Step() EmrClusterStepList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a>

---

##### `AdditionalInfoInput`<sup>Optional</sup> <a name="AdditionalInfoInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput"></a>

```go
func AdditionalInfoInput() *string
```

- *Type:* *string

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput"></a>

```go
func ApplicationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoscalingRoleInput`<sup>Optional</sup> <a name="AutoscalingRoleInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput"></a>

```go
func AutoscalingRoleInput() *string
```

- *Type:* *string

---

##### `AutoTerminationPolicyInput`<sup>Optional</sup> <a name="AutoTerminationPolicyInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput"></a>

```go
func AutoTerminationPolicyInput() EmrClusterAutoTerminationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `BootstrapActionInput`<sup>Optional</sup> <a name="BootstrapActionInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput"></a>

```go
func BootstrapActionInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput"></a>

```go
func ConfigurationsInput() *string
```

- *Type:* *string

---

##### `ConfigurationsJsonInput`<sup>Optional</sup> <a name="ConfigurationsJsonInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput"></a>

```go
func ConfigurationsJsonInput() *string
```

- *Type:* *string

---

##### `CoreInstanceFleetInput`<sup>Optional</sup> <a name="CoreInstanceFleetInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput"></a>

```go
func CoreInstanceFleetInput() EmrClusterCoreInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `CoreInstanceGroupInput`<sup>Optional</sup> <a name="CoreInstanceGroupInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput"></a>

```go
func CoreInstanceGroupInput() EmrClusterCoreInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `CustomAmiIdInput`<sup>Optional</sup> <a name="CustomAmiIdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput"></a>

```go
func CustomAmiIdInput() *string
```

- *Type:* *string

---

##### `EbsRootVolumeSizeInput`<sup>Optional</sup> <a name="EbsRootVolumeSizeInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput"></a>

```go
func EbsRootVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `Ec2AttributesInput`<sup>Optional</sup> <a name="Ec2AttributesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput"></a>

```go
func Ec2AttributesInput() EmrClusterEc2Attributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeepJobFlowAliveWhenNoStepsInput`<sup>Optional</sup> <a name="KeepJobFlowAliveWhenNoStepsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput"></a>

```go
func KeepJobFlowAliveWhenNoStepsInput() interface{}
```

- *Type:* interface{}

---

##### `KerberosAttributesInput`<sup>Optional</sup> <a name="KerberosAttributesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput"></a>

```go
func KerberosAttributesInput() EmrClusterKerberosAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `ListStepsStatesInput`<sup>Optional</sup> <a name="ListStepsStatesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput"></a>

```go
func ListStepsStatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="LogEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput"></a>

```go
func LogEncryptionKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput"></a>

```go
func LogUriInput() *string
```

- *Type:* *string

---

##### `MasterInstanceFleetInput`<sup>Optional</sup> <a name="MasterInstanceFleetInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput"></a>

```go
func MasterInstanceFleetInput() EmrClusterMasterInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `MasterInstanceGroupInput`<sup>Optional</sup> <a name="MasterInstanceGroupInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput"></a>

```go
func MasterInstanceGroupInput() EmrClusterMasterInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput"></a>

```go
func ReleaseLabelInput() *string
```

- *Type:* *string

---

##### `ScaleDownBehaviorInput`<sup>Optional</sup> <a name="ScaleDownBehaviorInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput"></a>

```go
func ScaleDownBehaviorInput() *string
```

- *Type:* *string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `StepConcurrencyLevelInput`<sup>Optional</sup> <a name="StepConcurrencyLevelInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput"></a>

```go
func StepConcurrencyLevelInput() *f64
```

- *Type:* *f64

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput"></a>

```go
func StepInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminationProtectionInput`<sup>Optional</sup> <a name="TerminationProtectionInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput"></a>

```go
func TerminationProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `VisibleToAllUsersInput`<sup>Optional</sup> <a name="VisibleToAllUsersInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput"></a>

```go
func VisibleToAllUsersInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalInfo`<sup>Required</sup> <a name="AdditionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo"></a>

```go
func AdditionalInfo() *string
```

- *Type:* *string

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applications"></a>

```go
func Applications() *[]*string
```

- *Type:* *[]*string

---

##### `AutoscalingRole`<sup>Required</sup> <a name="AutoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole"></a>

```go
func AutoscalingRole() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations"></a>

```go
func Configurations() *string
```

- *Type:* *string

---

##### `ConfigurationsJson`<sup>Required</sup> <a name="ConfigurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson"></a>

```go
func ConfigurationsJson() *string
```

- *Type:* *string

---

##### `CustomAmiId`<sup>Required</sup> <a name="CustomAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId"></a>

```go
func CustomAmiId() *string
```

- *Type:* *string

---

##### `EbsRootVolumeSize`<sup>Required</sup> <a name="EbsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize"></a>

```go
func EbsRootVolumeSize() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeepJobFlowAliveWhenNoSteps`<sup>Required</sup> <a name="KeepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps"></a>

```go
func KeepJobFlowAliveWhenNoSteps() interface{}
```

- *Type:* interface{}

---

##### `ListStepsStates`<sup>Required</sup> <a name="ListStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates"></a>

```go
func ListStepsStates() *[]*string
```

- *Type:* *[]*string

---

##### `LogEncryptionKmsKeyId`<sup>Required</sup> <a name="LogEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId"></a>

```go
func LogEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri"></a>

```go
func LogUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel"></a>

```go
func ReleaseLabel() *string
```

- *Type:* *string

---

##### `ScaleDownBehavior`<sup>Required</sup> <a name="ScaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior"></a>

```go
func ScaleDownBehavior() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `StepConcurrencyLevel`<sup>Required</sup> <a name="StepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel"></a>

```go
func StepConcurrencyLevel() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminationProtection`<sup>Required</sup> <a name="TerminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection"></a>

```go
func TerminationProtection() interface{}
```

- *Type:* interface{}

---

##### `VisibleToAllUsers`<sup>Required</sup> <a name="VisibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers"></a>

```go
func VisibleToAllUsers() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrClusterAutoTerminationPolicy <a name="EmrClusterAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterAutoTerminationPolicy {
	IdleTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout">IdleTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}. |

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout"></a>

```go
IdleTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}.

---

### EmrClusterBootstrapAction <a name="EmrClusterBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterBootstrapAction {
	Name: *string,
	Path: *string,
	Args: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args">Args</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

### EmrClusterConfig <a name="EmrClusterConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ReleaseLabel: *string,
	ServiceRole: *string,
	AdditionalInfo: *string,
	Applications: *[]*string,
	AutoscalingRole: *string,
	AutoTerminationPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterAutoTerminationPolicy,
	BootstrapAction: interface{},
	Configurations: *string,
	ConfigurationsJson: *string,
	CoreInstanceFleet: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterCoreInstanceFleet,
	CoreInstanceGroup: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterCoreInstanceGroup,
	CustomAmiId: *string,
	EbsRootVolumeSize: *f64,
	Ec2Attributes: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterEc2Attributes,
	Id: *string,
	KeepJobFlowAliveWhenNoSteps: interface{},
	KerberosAttributes: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterKerberosAttributes,
	ListStepsStates: *[]*string,
	LogEncryptionKmsKeyId: *string,
	LogUri: *string,
	MasterInstanceFleet: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterMasterInstanceFleet,
	MasterInstanceGroup: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterMasterInstanceGroup,
	ScaleDownBehavior: *string,
	SecurityConfiguration: *string,
	Step: interface{},
	StepConcurrencyLevel: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TerminationProtection: interface{},
	VisibleToAllUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo">AdditionalInfo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications">Applications</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole">AutoscalingRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy">AutoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | auto_termination_policy block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction">BootstrapAction</a></code> | <code>interface{}</code> | bootstrap_action block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations">Configurations</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson">ConfigurationsJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet">CoreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | core_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup">CoreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | core_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId">CustomAmiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize">EbsRootVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes">Ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | ec2_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps">KeepJobFlowAliveWhenNoSteps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes">KerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | kerberos_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates">ListStepsStates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId">LogEncryptionKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri">LogUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet">MasterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | master_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup">MasterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | master_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior">ScaleDownBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step">Step</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel">StepConcurrencyLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers">VisibleToAllUsers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel"></a>

```go
ReleaseLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}.

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}.

---

##### `AdditionalInfo`<sup>Optional</sup> <a name="AdditionalInfo" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo"></a>

```go
AdditionalInfo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}.

---

##### `Applications`<sup>Optional</sup> <a name="Applications" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications"></a>

```go
Applications *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}.

---

##### `AutoscalingRole`<sup>Optional</sup> <a name="AutoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole"></a>

```go
AutoscalingRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}.

---

##### `AutoTerminationPolicy`<sup>Optional</sup> <a name="AutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy"></a>

```go
AutoTerminationPolicy EmrClusterAutoTerminationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

auto_termination_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}

---

##### `BootstrapAction`<sup>Optional</sup> <a name="BootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction"></a>

```go
BootstrapAction interface{}
```

- *Type:* interface{}

bootstrap_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations"></a>

```go
Configurations *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}.

---

##### `ConfigurationsJson`<sup>Optional</sup> <a name="ConfigurationsJson" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson"></a>

```go
ConfigurationsJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}.

---

##### `CoreInstanceFleet`<sup>Optional</sup> <a name="CoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet"></a>

```go
CoreInstanceFleet EmrClusterCoreInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

core_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}

---

##### `CoreInstanceGroup`<sup>Optional</sup> <a name="CoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup"></a>

```go
CoreInstanceGroup EmrClusterCoreInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

core_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}

---

##### `CustomAmiId`<sup>Optional</sup> <a name="CustomAmiId" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId"></a>

```go
CustomAmiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}.

---

##### `EbsRootVolumeSize`<sup>Optional</sup> <a name="EbsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize"></a>

```go
EbsRootVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.

---

##### `Ec2Attributes`<sup>Optional</sup> <a name="Ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes"></a>

```go
Ec2Attributes EmrClusterEc2Attributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

ec2_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeepJobFlowAliveWhenNoSteps`<sup>Optional</sup> <a name="KeepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps"></a>

```go
KeepJobFlowAliveWhenNoSteps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.

---

##### `KerberosAttributes`<sup>Optional</sup> <a name="KerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes"></a>

```go
KerberosAttributes EmrClusterKerberosAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

kerberos_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}

---

##### `ListStepsStates`<sup>Optional</sup> <a name="ListStepsStates" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates"></a>

```go
ListStepsStates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}.

---

##### `LogEncryptionKmsKeyId`<sup>Optional</sup> <a name="LogEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId"></a>

```go
LogEncryptionKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}.

---

##### `LogUri`<sup>Optional</sup> <a name="LogUri" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri"></a>

```go
LogUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}.

---

##### `MasterInstanceFleet`<sup>Optional</sup> <a name="MasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet"></a>

```go
MasterInstanceFleet EmrClusterMasterInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

master_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}

---

##### `MasterInstanceGroup`<sup>Optional</sup> <a name="MasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup"></a>

```go
MasterInstanceGroup EmrClusterMasterInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

master_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}

---

##### `ScaleDownBehavior`<sup>Optional</sup> <a name="ScaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior"></a>

```go
ScaleDownBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}.

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}.

---

##### `Step`<sup>Optional</sup> <a name="Step" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step"></a>

```go
Step interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}.

---

##### `StepConcurrencyLevel`<sup>Optional</sup> <a name="StepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel"></a>

```go
StepConcurrencyLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}.

---

##### `TerminationProtection`<sup>Optional</sup> <a name="TerminationProtection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection"></a>

```go
TerminationProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}.

---

##### `VisibleToAllUsers`<sup>Optional</sup> <a name="VisibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers"></a>

```go
VisibleToAllUsers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}.

---

### EmrClusterCoreInstanceFleet <a name="EmrClusterCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleet {
	InstanceTypeConfigs: interface{},
	LaunchSpecifications: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications,
	Name: *string,
	TargetOnDemandCapacity: *f64,
	TargetSpotCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs">InstanceTypeConfigs</a></code> | <code>interface{}</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications">LaunchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity">TargetOnDemandCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity">TargetSpotCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `InstanceTypeConfigs`<sup>Optional</sup> <a name="InstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs"></a>

```go
InstanceTypeConfigs interface{}
```

- *Type:* interface{}

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `LaunchSpecifications`<sup>Optional</sup> <a name="LaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications"></a>

```go
LaunchSpecifications EmrClusterCoreInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `TargetOnDemandCapacity`<sup>Optional</sup> <a name="TargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity"></a>

```go
TargetOnDemandCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `TargetSpotCapacity`<sup>Optional</sup> <a name="TargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity"></a>

```go
TargetSpotCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigs <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs {
	InstanceType: *string,
	BidPrice: *string,
	BidPriceAsPercentageOfOnDemandPrice: *f64,
	Configurations: interface{},
	EbsConfig: interface{},
	WeightedCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice">BidPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">BidPriceAsPercentageOfOnDemandPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations">Configurations</a></code> | <code>interface{}</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig">EbsConfig</a></code> | <code>interface{}</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```go
BidPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `BidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="BidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```go
BidPriceAsPercentageOfOnDemandPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```go
Configurations interface{}
```

- *Type:* interface{}

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```go
EbsConfig interface{}
```

- *Type:* interface{}

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```go
WeightedCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations {
	Classification: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig {
	Size: *f64,
	Type: *string,
	Iops: *f64,
	VolumesPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```go
VolumesPerInstance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterCoreInstanceFleetLaunchSpecifications <a name="EmrClusterCoreInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleetLaunchSpecifications {
	OnDemandSpecification: interface{},
	SpotSpecification: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification">OnDemandSpecification</a></code> | <code>interface{}</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification">SpotSpecification</a></code> | <code>interface{}</code> | spot_specification block. |

---

##### `OnDemandSpecification`<sup>Optional</sup> <a name="OnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```go
OnDemandSpecification interface{}
```

- *Type:* interface{}

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `SpotSpecification`<sup>Optional</sup> <a name="SpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```go
SpotSpecification interface{}
```

- *Type:* interface{}

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
	AllocationStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification {
	AllocationStrategy: *string,
	TimeoutAction: *string,
	TimeoutDurationMinutes: *f64,
	BlockDurationMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">TimeoutDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```go
TimeoutAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `TimeoutDurationMinutes`<sup>Required</sup> <a name="TimeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```go
TimeoutDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `BlockDurationMinutes`<sup>Optional</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```go
BlockDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterCoreInstanceGroup <a name="EmrClusterCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceGroup {
	InstanceType: *string,
	AutoscalingPolicy: *string,
	BidPrice: *string,
	EbsConfig: interface{},
	InstanceCount: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice">BidPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig">EbsConfig</a></code> | <code>interface{}</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `AutoscalingPolicy`<sup>Optional</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy"></a>

```go
AutoscalingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice"></a>

```go
BidPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig"></a>

```go
EbsConfig interface{}
```

- *Type:* interface{}

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterCoreInstanceGroupEbsConfig <a name="EmrClusterCoreInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterCoreInstanceGroupEbsConfig {
	Size: *f64,
	Type: *string,
	Iops: *f64,
	Throughput: *f64,
	VolumesPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```go
VolumesPerInstance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterEc2Attributes <a name="EmrClusterEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterEc2Attributes {
	InstanceProfile: *string,
	AdditionalMasterSecurityGroups: *string,
	AdditionalSlaveSecurityGroups: *string,
	EmrManagedMasterSecurityGroup: *string,
	EmrManagedSlaveSecurityGroup: *string,
	KeyName: *string,
	ServiceAccessSecurityGroup: *string,
	SubnetId: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile">InstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups">AdditionalMasterSecurityGroups</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups">AdditionalSlaveSecurityGroups</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup">EmrManagedMasterSecurityGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup">EmrManagedSlaveSecurityGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup">ServiceAccessSecurityGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}. |

---

##### `InstanceProfile`<sup>Required</sup> <a name="InstanceProfile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile"></a>

```go
InstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}.

---

##### `AdditionalMasterSecurityGroups`<sup>Optional</sup> <a name="AdditionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups"></a>

```go
AdditionalMasterSecurityGroups *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}.

---

##### `AdditionalSlaveSecurityGroups`<sup>Optional</sup> <a name="AdditionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups"></a>

```go
AdditionalSlaveSecurityGroups *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}.

---

##### `EmrManagedMasterSecurityGroup`<sup>Optional</sup> <a name="EmrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup"></a>

```go
EmrManagedMasterSecurityGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}.

---

##### `EmrManagedSlaveSecurityGroup`<sup>Optional</sup> <a name="EmrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup"></a>

```go
EmrManagedSlaveSecurityGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}.

---

##### `ServiceAccessSecurityGroup`<sup>Optional</sup> <a name="ServiceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup"></a>

```go
ServiceAccessSecurityGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}.

---

### EmrClusterKerberosAttributes <a name="EmrClusterKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterKerberosAttributes {
	KdcAdminPassword: *string,
	Realm: *string,
	AdDomainJoinPassword: *string,
	AdDomainJoinUser: *string,
	CrossRealmTrustPrincipalPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword">KdcAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm">Realm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword">AdDomainJoinPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser">AdDomainJoinUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword">CrossRealmTrustPrincipalPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}. |

---

##### `KdcAdminPassword`<sup>Required</sup> <a name="KdcAdminPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword"></a>

```go
KdcAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}.

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm"></a>

```go
Realm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}.

---

##### `AdDomainJoinPassword`<sup>Optional</sup> <a name="AdDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword"></a>

```go
AdDomainJoinPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}.

---

##### `AdDomainJoinUser`<sup>Optional</sup> <a name="AdDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser"></a>

```go
AdDomainJoinUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}.

---

##### `CrossRealmTrustPrincipalPassword`<sup>Optional</sup> <a name="CrossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword"></a>

```go
CrossRealmTrustPrincipalPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}.

---

### EmrClusterMasterInstanceFleet <a name="EmrClusterMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleet {
	InstanceTypeConfigs: interface{},
	LaunchSpecifications: github.com/cdktf/cdktf-provider-aws-go/aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications,
	Name: *string,
	TargetOnDemandCapacity: *f64,
	TargetSpotCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs">InstanceTypeConfigs</a></code> | <code>interface{}</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications">LaunchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity">TargetOnDemandCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity">TargetSpotCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `InstanceTypeConfigs`<sup>Optional</sup> <a name="InstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs"></a>

```go
InstanceTypeConfigs interface{}
```

- *Type:* interface{}

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `LaunchSpecifications`<sup>Optional</sup> <a name="LaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications"></a>

```go
LaunchSpecifications EmrClusterMasterInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `TargetOnDemandCapacity`<sup>Optional</sup> <a name="TargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity"></a>

```go
TargetOnDemandCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `TargetSpotCapacity`<sup>Optional</sup> <a name="TargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity"></a>

```go
TargetSpotCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigs <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs {
	InstanceType: *string,
	BidPrice: *string,
	BidPriceAsPercentageOfOnDemandPrice: *f64,
	Configurations: interface{},
	EbsConfig: interface{},
	WeightedCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice">BidPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">BidPriceAsPercentageOfOnDemandPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations">Configurations</a></code> | <code>interface{}</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig">EbsConfig</a></code> | <code>interface{}</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```go
BidPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `BidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="BidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```go
BidPriceAsPercentageOfOnDemandPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```go
Configurations interface{}
```

- *Type:* interface{}

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```go
EbsConfig interface{}
```

- *Type:* interface{}

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```go
WeightedCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations {
	Classification: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig {
	Size: *f64,
	Type: *string,
	Iops: *f64,
	VolumesPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```go
VolumesPerInstance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterMasterInstanceFleetLaunchSpecifications <a name="EmrClusterMasterInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleetLaunchSpecifications {
	OnDemandSpecification: interface{},
	SpotSpecification: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification">OnDemandSpecification</a></code> | <code>interface{}</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification">SpotSpecification</a></code> | <code>interface{}</code> | spot_specification block. |

---

##### `OnDemandSpecification`<sup>Optional</sup> <a name="OnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```go
OnDemandSpecification interface{}
```

- *Type:* interface{}

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `SpotSpecification`<sup>Optional</sup> <a name="SpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```go
SpotSpecification interface{}
```

- *Type:* interface{}

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
	AllocationStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
	AllocationStrategy: *string,
	TimeoutAction: *string,
	TimeoutDurationMinutes: *f64,
	BlockDurationMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">TimeoutDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```go
TimeoutAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `TimeoutDurationMinutes`<sup>Required</sup> <a name="TimeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```go
TimeoutDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `BlockDurationMinutes`<sup>Optional</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```go
BlockDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterMasterInstanceGroup <a name="EmrClusterMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceGroup {
	InstanceType: *string,
	BidPrice: *string,
	EbsConfig: interface{},
	InstanceCount: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice">BidPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig">EbsConfig</a></code> | <code>interface{}</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice"></a>

```go
BidPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig"></a>

```go
EbsConfig interface{}
```

- *Type:* interface{}

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterMasterInstanceGroupEbsConfig <a name="EmrClusterMasterInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterMasterInstanceGroupEbsConfig {
	Size: *f64,
	Type: *string,
	Iops: *f64,
	Throughput: *f64,
	VolumesPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```go
VolumesPerInstance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterStep <a name="EmrClusterStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterStep {
	ActionOnFailure: *string,
	HadoopJarStep: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure">ActionOnFailure</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep">HadoopJarStep</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `ActionOnFailure`<sup>Optional</sup> <a name="ActionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure"></a>

```go
ActionOnFailure *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}.

---

##### `HadoopJarStep`<sup>Optional</sup> <a name="HadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep"></a>

```go
HadoopJarStep interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterStepHadoopJarStep <a name="EmrClusterStepHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

&emrcluster.EmrClusterStepHadoopJarStep {
	Args: *[]*string,
	Jar: *string,
	MainClass: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args">Args</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar">Jar</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass">MainClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar"></a>

```go
Jar *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}.

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrClusterAutoTerminationPolicyOutputReference <a name="EmrClusterAutoTerminationPolicyOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterAutoTerminationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterAutoTerminationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout"></a>

```go
func ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout"></a>

```go
func IdleTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterAutoTerminationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---


### EmrClusterBootstrapActionList <a name="EmrClusterBootstrapActionList" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterBootstrapActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterBootstrapActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get"></a>

```go
func Get(index *f64) EmrClusterBootstrapActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterBootstrapActionOutputReference <a name="EmrClusterBootstrapActionOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterBootstrapActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterBootstrapActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs"></a>

```go
func ResetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```go
func Get(index *f64) EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```go
func ResetClassification()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```go
func Get(index *f64) EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```go
func ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```go
func VolumesPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```go
func VolumesPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetInstanceTypeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterCoreInstanceFleetInstanceTypeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get"></a>

```go
func Get(index *f64) EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">ResetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```go
func PutConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```go
func PutEbsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```go
func ResetBidPrice()
```

##### `ResetBidPriceAsPercentageOfOnDemandPrice` <a name="ResetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```go
func ResetBidPriceAsPercentageOfOnDemandPrice()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```go
func ResetConfigurations()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```go
func ResetEbsConfig()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```go
func ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">BidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">BidPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">EbsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">BidPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">BidPriceAsPercentageOfOnDemandPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```go
func Configurations() EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```go
func EbsConfig() EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `BidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="BidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```go
func BidPriceAsPercentageOfOnDemandPriceInput() *f64
```

- *Type:* *f64

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```go
func BidPriceInput() *string
```

- *Type:* *string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```go
func ConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```go
func EbsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```go
func WeightedCapacityInput() *f64
```

- *Type:* *f64

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```go
func BidPrice() *string
```

- *Type:* *string

---

##### `BidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="BidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```go
func BidPriceAsPercentageOfOnDemandPrice() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```go
func Get(index *f64) EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">PutOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">PutSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">ResetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">ResetSpotSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemandSpecification` <a name="PutOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```go
func PutOnDemandSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpotSpecification` <a name="PutSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```go
func PutSpotSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnDemandSpecification` <a name="ResetOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```go
func ResetOnDemandSpecification()
```

##### `ResetSpotSpecification` <a name="ResetSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```go
func ResetSpotSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">OnDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">SpotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">OnDemandSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">SpotSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemandSpecification`<sup>Required</sup> <a name="OnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```go
func OnDemandSpecification() EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `SpotSpecification`<sup>Required</sup> <a name="SpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```go
func SpotSpecification() EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `OnDemandSpecificationInput`<sup>Optional</sup> <a name="OnDemandSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```go
func OnDemandSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `SpotSpecificationInput`<sup>Optional</sup> <a name="SpotSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```go
func SpotSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterCoreInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```go
func Get(index *f64) EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">ResetBlockDurationMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockDurationMinutes` <a name="ResetBlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```go
func ResetBlockDurationMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">BlockDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">TimeoutDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">TimeoutDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `BlockDurationMinutesInput`<sup>Optional</sup> <a name="BlockDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```go
func BlockDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```go
func TimeoutActionInput() *string
```

- *Type:* *string

---

##### `TimeoutDurationMinutesInput`<sup>Optional</sup> <a name="TimeoutDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```go
func TimeoutDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```go
func BlockDurationMinutes() *f64
```

- *Type:* *f64

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```go
func TimeoutAction() *string
```

- *Type:* *string

---

##### `TimeoutDurationMinutes`<sup>Required</sup> <a name="TimeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```go
func TimeoutDurationMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceFleetOutputReference <a name="EmrClusterCoreInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterCoreInstanceFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs">PutInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications">PutLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs">ResetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications">ResetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity">ResetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity">ResetTargetSpotCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceTypeConfigs` <a name="PutInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```go
func PutInstanceTypeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchSpecifications` <a name="PutLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications"></a>

```go
func PutLaunchSpecifications(value EmrClusterCoreInstanceFleetLaunchSpecifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `ResetInstanceTypeConfigs` <a name="ResetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```go
func ResetInstanceTypeConfigs()
```

##### `ResetLaunchSpecifications` <a name="ResetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```go
func ResetLaunchSpecifications()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetOnDemandCapacity` <a name="ResetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```go
func ResetTargetOnDemandCapacity()
```

##### `ResetTargetSpotCapacity` <a name="ResetTargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```go
func ResetTargetSpotCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs">InstanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications">LaunchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity">ProvisionedOnDemandCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity">ProvisionedSpotCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput">InstanceTypeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput">LaunchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput">TargetOnDemandCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput">TargetSpotCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity">TargetOnDemandCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity">TargetSpotCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTypeConfigs`<sup>Required</sup> <a name="InstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```go
func InstanceTypeConfigs() EmrClusterCoreInstanceFleetInstanceTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a>

---

##### `LaunchSpecifications`<sup>Required</sup> <a name="LaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications"></a>

```go
func LaunchSpecifications() EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `ProvisionedOnDemandCapacity`<sup>Required</sup> <a name="ProvisionedOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```go
func ProvisionedOnDemandCapacity() *f64
```

- *Type:* *f64

---

##### `ProvisionedSpotCapacity`<sup>Required</sup> <a name="ProvisionedSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```go
func ProvisionedSpotCapacity() *f64
```

- *Type:* *f64

---

##### `InstanceTypeConfigsInput`<sup>Optional</sup> <a name="InstanceTypeConfigsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```go
func InstanceTypeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchSpecificationsInput`<sup>Optional</sup> <a name="LaunchSpecificationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```go
func LaunchSpecificationsInput() EmrClusterCoreInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetOnDemandCapacityInput`<sup>Optional</sup> <a name="TargetOnDemandCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```go
func TargetOnDemandCapacityInput() *f64
```

- *Type:* *f64

---

##### `TargetSpotCapacityInput`<sup>Optional</sup> <a name="TargetSpotCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```go
func TargetSpotCapacityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetOnDemandCapacity`<sup>Required</sup> <a name="TargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```go
func TargetOnDemandCapacity() *f64
```

- *Type:* *f64

---

##### `TargetSpotCapacity`<sup>Required</sup> <a name="TargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```go
func TargetSpotCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterCoreInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---


### EmrClusterCoreInstanceGroupEbsConfigList <a name="EmrClusterCoreInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceGroupEbsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterCoreInstanceGroupEbsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get"></a>

```go
func Get(index *f64) EmrClusterCoreInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceGroupEbsConfigOutputReference <a name="EmrClusterCoreInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceGroupEbsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterCoreInstanceGroupEbsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```go
func ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```go
func VolumesPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```go
func VolumesPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterCoreInstanceGroupOutputReference <a name="EmrClusterCoreInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterCoreInstanceGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterCoreInstanceGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy">ResetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig"></a>

```go
func PutEbsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscalingPolicy` <a name="ResetAutoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy"></a>

```go
func ResetAutoscalingPolicy()
```

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice"></a>

```go
func ResetBidPrice()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig"></a>

```go
func ResetEbsConfig()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput">BidPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput">EbsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice">BidPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig"></a>

```go
func EbsConfig() EmrClusterCoreInstanceGroupEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput"></a>

```go
func AutoscalingPolicyInput() *string
```

- *Type:* *string

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput"></a>

```go
func BidPriceInput() *string
```

- *Type:* *string

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput"></a>

```go
func EbsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy"></a>

```go
func AutoscalingPolicy() *string
```

- *Type:* *string

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice"></a>

```go
func BidPrice() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterCoreInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---


### EmrClusterEc2AttributesOutputReference <a name="EmrClusterEc2AttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterEc2AttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterEc2AttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups">ResetAdditionalMasterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups">ResetAdditionalSlaveSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup">ResetEmrManagedMasterSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup">ResetEmrManagedSlaveSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup">ResetServiceAccessSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalMasterSecurityGroups` <a name="ResetAdditionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups"></a>

```go
func ResetAdditionalMasterSecurityGroups()
```

##### `ResetAdditionalSlaveSecurityGroups` <a name="ResetAdditionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups"></a>

```go
func ResetAdditionalSlaveSecurityGroups()
```

##### `ResetEmrManagedMasterSecurityGroup` <a name="ResetEmrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup"></a>

```go
func ResetEmrManagedMasterSecurityGroup()
```

##### `ResetEmrManagedSlaveSecurityGroup` <a name="ResetEmrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup"></a>

```go
func ResetEmrManagedSlaveSecurityGroup()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetServiceAccessSecurityGroup` <a name="ResetServiceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup"></a>

```go
func ResetServiceAccessSecurityGroup()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput">AdditionalMasterSecurityGroupsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput">AdditionalSlaveSecurityGroupsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput">EmrManagedMasterSecurityGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput">EmrManagedSlaveSecurityGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput">InstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput">ServiceAccessSecurityGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups">AdditionalMasterSecurityGroups</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups">AdditionalSlaveSecurityGroups</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup">EmrManagedMasterSecurityGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup">EmrManagedSlaveSecurityGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile">InstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup">ServiceAccessSecurityGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalMasterSecurityGroupsInput`<sup>Optional</sup> <a name="AdditionalMasterSecurityGroupsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput"></a>

```go
func AdditionalMasterSecurityGroupsInput() *string
```

- *Type:* *string

---

##### `AdditionalSlaveSecurityGroupsInput`<sup>Optional</sup> <a name="AdditionalSlaveSecurityGroupsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput"></a>

```go
func AdditionalSlaveSecurityGroupsInput() *string
```

- *Type:* *string

---

##### `EmrManagedMasterSecurityGroupInput`<sup>Optional</sup> <a name="EmrManagedMasterSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput"></a>

```go
func EmrManagedMasterSecurityGroupInput() *string
```

- *Type:* *string

---

##### `EmrManagedSlaveSecurityGroupInput`<sup>Optional</sup> <a name="EmrManagedSlaveSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput"></a>

```go
func EmrManagedSlaveSecurityGroupInput() *string
```

- *Type:* *string

---

##### `InstanceProfileInput`<sup>Optional</sup> <a name="InstanceProfileInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput"></a>

```go
func InstanceProfileInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `ServiceAccessSecurityGroupInput`<sup>Optional</sup> <a name="ServiceAccessSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput"></a>

```go
func ServiceAccessSecurityGroupInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalMasterSecurityGroups`<sup>Required</sup> <a name="AdditionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups"></a>

```go
func AdditionalMasterSecurityGroups() *string
```

- *Type:* *string

---

##### `AdditionalSlaveSecurityGroups`<sup>Required</sup> <a name="AdditionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups"></a>

```go
func AdditionalSlaveSecurityGroups() *string
```

- *Type:* *string

---

##### `EmrManagedMasterSecurityGroup`<sup>Required</sup> <a name="EmrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup"></a>

```go
func EmrManagedMasterSecurityGroup() *string
```

- *Type:* *string

---

##### `EmrManagedSlaveSecurityGroup`<sup>Required</sup> <a name="EmrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup"></a>

```go
func EmrManagedSlaveSecurityGroup() *string
```

- *Type:* *string

---

##### `InstanceProfile`<sup>Required</sup> <a name="InstanceProfile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile"></a>

```go
func InstanceProfile() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `ServiceAccessSecurityGroup`<sup>Required</sup> <a name="ServiceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup"></a>

```go
func ServiceAccessSecurityGroup() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterEc2Attributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---


### EmrClusterKerberosAttributesOutputReference <a name="EmrClusterKerberosAttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterKerberosAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterKerberosAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword">ResetAdDomainJoinPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser">ResetAdDomainJoinUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword">ResetCrossRealmTrustPrincipalPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdDomainJoinPassword` <a name="ResetAdDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword"></a>

```go
func ResetAdDomainJoinPassword()
```

##### `ResetAdDomainJoinUser` <a name="ResetAdDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser"></a>

```go
func ResetAdDomainJoinUser()
```

##### `ResetCrossRealmTrustPrincipalPassword` <a name="ResetCrossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword"></a>

```go
func ResetCrossRealmTrustPrincipalPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput">AdDomainJoinPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput">AdDomainJoinUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput">CrossRealmTrustPrincipalPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput">KdcAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput">RealmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword">AdDomainJoinPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser">AdDomainJoinUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword">CrossRealmTrustPrincipalPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword">KdcAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm">Realm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdDomainJoinPasswordInput`<sup>Optional</sup> <a name="AdDomainJoinPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput"></a>

```go
func AdDomainJoinPasswordInput() *string
```

- *Type:* *string

---

##### `AdDomainJoinUserInput`<sup>Optional</sup> <a name="AdDomainJoinUserInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput"></a>

```go
func AdDomainJoinUserInput() *string
```

- *Type:* *string

---

##### `CrossRealmTrustPrincipalPasswordInput`<sup>Optional</sup> <a name="CrossRealmTrustPrincipalPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput"></a>

```go
func CrossRealmTrustPrincipalPasswordInput() *string
```

- *Type:* *string

---

##### `KdcAdminPasswordInput`<sup>Optional</sup> <a name="KdcAdminPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput"></a>

```go
func KdcAdminPasswordInput() *string
```

- *Type:* *string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput"></a>

```go
func RealmInput() *string
```

- *Type:* *string

---

##### `AdDomainJoinPassword`<sup>Required</sup> <a name="AdDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword"></a>

```go
func AdDomainJoinPassword() *string
```

- *Type:* *string

---

##### `AdDomainJoinUser`<sup>Required</sup> <a name="AdDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser"></a>

```go
func AdDomainJoinUser() *string
```

- *Type:* *string

---

##### `CrossRealmTrustPrincipalPassword`<sup>Required</sup> <a name="CrossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword"></a>

```go
func CrossRealmTrustPrincipalPassword() *string
```

- *Type:* *string

---

##### `KdcAdminPassword`<sup>Required</sup> <a name="KdcAdminPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword"></a>

```go
func KdcAdminPassword() *string
```

- *Type:* *string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm"></a>

```go
func Realm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterKerberosAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```go
func Get(index *f64) EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```go
func ResetClassification()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```go
func Get(index *f64) EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```go
func ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```go
func VolumesPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```go
func VolumesPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetInstanceTypeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterMasterInstanceFleetInstanceTypeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get"></a>

```go
func Get(index *f64) EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">ResetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```go
func PutConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```go
func PutEbsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```go
func ResetBidPrice()
```

##### `ResetBidPriceAsPercentageOfOnDemandPrice` <a name="ResetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```go
func ResetBidPriceAsPercentageOfOnDemandPrice()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```go
func ResetConfigurations()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```go
func ResetEbsConfig()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```go
func ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">BidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">BidPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">EbsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">BidPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">BidPriceAsPercentageOfOnDemandPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```go
func Configurations() EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```go
func EbsConfig() EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `BidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="BidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```go
func BidPriceAsPercentageOfOnDemandPriceInput() *f64
```

- *Type:* *f64

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```go
func BidPriceInput() *string
```

- *Type:* *string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```go
func ConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```go
func EbsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```go
func WeightedCapacityInput() *f64
```

- *Type:* *f64

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```go
func BidPrice() *string
```

- *Type:* *string

---

##### `BidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="BidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```go
func BidPriceAsPercentageOfOnDemandPrice() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```go
func Get(index *f64) EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">PutOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">PutSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">ResetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">ResetSpotSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemandSpecification` <a name="PutOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```go
func PutOnDemandSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpotSpecification` <a name="PutSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```go
func PutSpotSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnDemandSpecification` <a name="ResetOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```go
func ResetOnDemandSpecification()
```

##### `ResetSpotSpecification` <a name="ResetSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```go
func ResetSpotSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">OnDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">SpotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">OnDemandSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">SpotSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemandSpecification`<sup>Required</sup> <a name="OnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```go
func OnDemandSpecification() EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `SpotSpecification`<sup>Required</sup> <a name="SpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```go
func SpotSpecification() EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `OnDemandSpecificationInput`<sup>Optional</sup> <a name="OnDemandSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```go
func OnDemandSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `SpotSpecificationInput`<sup>Optional</sup> <a name="SpotSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```go
func SpotSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterMasterInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```go
func Get(index *f64) EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">ResetBlockDurationMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockDurationMinutes` <a name="ResetBlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```go
func ResetBlockDurationMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">BlockDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">TimeoutDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">TimeoutDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `BlockDurationMinutesInput`<sup>Optional</sup> <a name="BlockDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```go
func BlockDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```go
func TimeoutActionInput() *string
```

- *Type:* *string

---

##### `TimeoutDurationMinutesInput`<sup>Optional</sup> <a name="TimeoutDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```go
func TimeoutDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```go
func BlockDurationMinutes() *f64
```

- *Type:* *f64

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```go
func TimeoutAction() *string
```

- *Type:* *string

---

##### `TimeoutDurationMinutes`<sup>Required</sup> <a name="TimeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```go
func TimeoutDurationMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceFleetOutputReference <a name="EmrClusterMasterInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterMasterInstanceFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs">PutInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications">PutLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs">ResetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications">ResetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity">ResetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity">ResetTargetSpotCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceTypeConfigs` <a name="PutInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```go
func PutInstanceTypeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchSpecifications` <a name="PutLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications"></a>

```go
func PutLaunchSpecifications(value EmrClusterMasterInstanceFleetLaunchSpecifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `ResetInstanceTypeConfigs` <a name="ResetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```go
func ResetInstanceTypeConfigs()
```

##### `ResetLaunchSpecifications` <a name="ResetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```go
func ResetLaunchSpecifications()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetOnDemandCapacity` <a name="ResetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```go
func ResetTargetOnDemandCapacity()
```

##### `ResetTargetSpotCapacity` <a name="ResetTargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```go
func ResetTargetSpotCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs">InstanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications">LaunchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity">ProvisionedOnDemandCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity">ProvisionedSpotCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput">InstanceTypeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput">LaunchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput">TargetOnDemandCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput">TargetSpotCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity">TargetOnDemandCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity">TargetSpotCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTypeConfigs`<sup>Required</sup> <a name="InstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```go
func InstanceTypeConfigs() EmrClusterMasterInstanceFleetInstanceTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a>

---

##### `LaunchSpecifications`<sup>Required</sup> <a name="LaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications"></a>

```go
func LaunchSpecifications() EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `ProvisionedOnDemandCapacity`<sup>Required</sup> <a name="ProvisionedOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```go
func ProvisionedOnDemandCapacity() *f64
```

- *Type:* *f64

---

##### `ProvisionedSpotCapacity`<sup>Required</sup> <a name="ProvisionedSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```go
func ProvisionedSpotCapacity() *f64
```

- *Type:* *f64

---

##### `InstanceTypeConfigsInput`<sup>Optional</sup> <a name="InstanceTypeConfigsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```go
func InstanceTypeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchSpecificationsInput`<sup>Optional</sup> <a name="LaunchSpecificationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```go
func LaunchSpecificationsInput() EmrClusterMasterInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetOnDemandCapacityInput`<sup>Optional</sup> <a name="TargetOnDemandCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```go
func TargetOnDemandCapacityInput() *f64
```

- *Type:* *f64

---

##### `TargetSpotCapacityInput`<sup>Optional</sup> <a name="TargetSpotCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```go
func TargetSpotCapacityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetOnDemandCapacity`<sup>Required</sup> <a name="TargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```go
func TargetOnDemandCapacity() *f64
```

- *Type:* *f64

---

##### `TargetSpotCapacity`<sup>Required</sup> <a name="TargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```go
func TargetSpotCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterMasterInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---


### EmrClusterMasterInstanceGroupEbsConfigList <a name="EmrClusterMasterInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceGroupEbsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterMasterInstanceGroupEbsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get"></a>

```go
func Get(index *f64) EmrClusterMasterInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceGroupEbsConfigOutputReference <a name="EmrClusterMasterInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceGroupEbsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterMasterInstanceGroupEbsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```go
func ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```go
func VolumesPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```go
func VolumesPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterMasterInstanceGroupOutputReference <a name="EmrClusterMasterInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterMasterInstanceGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrClusterMasterInstanceGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig"></a>

```go
func PutEbsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice"></a>

```go
func ResetBidPrice()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig"></a>

```go
func ResetEbsConfig()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput">BidPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput">EbsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice">BidPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig"></a>

```go
func EbsConfig() EmrClusterMasterInstanceGroupEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput"></a>

```go
func BidPriceInput() *string
```

- *Type:* *string

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput"></a>

```go
func EbsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice"></a>

```go
func BidPrice() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrClusterMasterInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---


### EmrClusterStepHadoopJarStepList <a name="EmrClusterStepHadoopJarStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterStepHadoopJarStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterStepHadoopJarStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get"></a>

```go
func Get(index *f64) EmrClusterStepHadoopJarStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterStepHadoopJarStepOutputReference <a name="EmrClusterStepHadoopJarStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterStepHadoopJarStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterStepHadoopJarStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar"></a>

```go
func ResetJar()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput">JarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar">Jar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput"></a>

```go
func JarInput() *string
```

- *Type:* *string

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar"></a>

```go
func Jar() *string
```

- *Type:* *string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterStepList <a name="EmrClusterStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrClusterStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get"></a>

```go
func Get(index *f64) EmrClusterStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrClusterStepOutputReference <a name="EmrClusterStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcluster"

emrcluster.NewEmrClusterStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrClusterStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep">PutHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure">ResetActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep">ResetHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHadoopJarStep` <a name="PutHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep"></a>

```go
func PutHadoopJarStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActionOnFailure` <a name="ResetActionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure"></a>

```go
func ResetActionOnFailure()
```

##### `ResetHadoopJarStep` <a name="ResetHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep"></a>

```go
func ResetHadoopJarStep()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep">HadoopJarStep</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput">ActionOnFailureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput">HadoopJarStepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure">ActionOnFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HadoopJarStep`<sup>Required</sup> <a name="HadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep"></a>

```go
func HadoopJarStep() EmrClusterStepHadoopJarStepList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a>

---

##### `ActionOnFailureInput`<sup>Optional</sup> <a name="ActionOnFailureInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput"></a>

```go
func ActionOnFailureInput() *string
```

- *Type:* *string

---

##### `HadoopJarStepInput`<sup>Optional</sup> <a name="HadoopJarStepInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput"></a>

```go
func HadoopJarStepInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ActionOnFailure`<sup>Required</sup> <a name="ActionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure"></a>

```go
func ActionOnFailure() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



