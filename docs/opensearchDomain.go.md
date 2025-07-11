# `opensearchDomain` Submodule <a name="`opensearchDomain` Submodule" id="@cdktf/provider-aws.opensearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomain <a name="OpensearchDomain" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain aws_opensearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomain(scope Construct, id *string, config OpensearchDomainConfig) OpensearchDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig">OpensearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig">OpensearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions">PutAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions">PutAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig">PutClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions">PutCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions">PutDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions">PutEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest">PutEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions">PutLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption">PutNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putOffPeakWindowOptions">PutOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions">PutSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSoftwareUpdateOptions">PutSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies">ResetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions">ResetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions">ResetAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig">ResetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions">ResetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions">ResetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions">ResetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest">ResetEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions">ResetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption">ResetNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOffPeakWindowOptions">ResetOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions">ResetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSoftwareUpdateOptions">ResetSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions">ResetVpcOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedSecurityOptions` <a name="PutAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions"></a>

```go
func PutAdvancedSecurityOptions(value OpensearchDomainAdvancedSecurityOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `PutAutoTuneOptions` <a name="PutAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions"></a>

```go
func PutAutoTuneOptions(value OpensearchDomainAutoTuneOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig"></a>

```go
func PutClusterConfig(value OpensearchDomainClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `PutCognitoOptions` <a name="PutCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions"></a>

```go
func PutCognitoOptions(value OpensearchDomainCognitoOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `PutDomainEndpointOptions` <a name="PutDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions"></a>

```go
func PutDomainEndpointOptions(value OpensearchDomainDomainEndpointOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `PutEbsOptions` <a name="PutEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions"></a>

```go
func PutEbsOptions(value OpensearchDomainEbsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `PutEncryptAtRest` <a name="PutEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest"></a>

```go
func PutEncryptAtRest(value OpensearchDomainEncryptAtRest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `PutLogPublishingOptions` <a name="PutLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions"></a>

```go
func PutLogPublishingOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeToNodeEncryption` <a name="PutNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption"></a>

```go
func PutNodeToNodeEncryption(value OpensearchDomainNodeToNodeEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `PutOffPeakWindowOptions` <a name="PutOffPeakWindowOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putOffPeakWindowOptions"></a>

```go
func PutOffPeakWindowOptions(value OpensearchDomainOffPeakWindowOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putOffPeakWindowOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a>

---

##### `PutSnapshotOptions` <a name="PutSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions"></a>

```go
func PutSnapshotOptions(value OpensearchDomainSnapshotOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `PutSoftwareUpdateOptions` <a name="PutSoftwareUpdateOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSoftwareUpdateOptions"></a>

```go
func PutSoftwareUpdateOptions(value OpensearchDomainSoftwareUpdateOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSoftwareUpdateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts"></a>

```go
func PutTimeouts(value OpensearchDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions"></a>

```go
func PutVpcOptions(value OpensearchDomainVpcOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `ResetAccessPolicies` <a name="ResetAccessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies"></a>

```go
func ResetAccessPolicies()
```

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions"></a>

```go
func ResetAdvancedOptions()
```

##### `ResetAdvancedSecurityOptions` <a name="ResetAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions"></a>

```go
func ResetAdvancedSecurityOptions()
```

##### `ResetAutoTuneOptions` <a name="ResetAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions"></a>

```go
func ResetAutoTuneOptions()
```

##### `ResetClusterConfig` <a name="ResetClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig"></a>

```go
func ResetClusterConfig()
```

##### `ResetCognitoOptions` <a name="ResetCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions"></a>

```go
func ResetCognitoOptions()
```

##### `ResetDomainEndpointOptions` <a name="ResetDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions"></a>

```go
func ResetDomainEndpointOptions()
```

##### `ResetEbsOptions` <a name="ResetEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions"></a>

```go
func ResetEbsOptions()
```

##### `ResetEncryptAtRest` <a name="ResetEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest"></a>

```go
func ResetEncryptAtRest()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetLogPublishingOptions` <a name="ResetLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions"></a>

```go
func ResetLogPublishingOptions()
```

##### `ResetNodeToNodeEncryption` <a name="ResetNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption"></a>

```go
func ResetNodeToNodeEncryption()
```

##### `ResetOffPeakWindowOptions` <a name="ResetOffPeakWindowOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOffPeakWindowOptions"></a>

```go
func ResetOffPeakWindowOptions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSnapshotOptions` <a name="ResetSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions"></a>

```go
func ResetSnapshotOptions()
```

##### `ResetSoftwareUpdateOptions` <a name="ResetSoftwareUpdateOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSoftwareUpdateOptions"></a>

```go
func ResetSoftwareUpdateOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcOptions` <a name="ResetVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions"></a>

```go
func ResetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.OpensearchDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.OpensearchDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.OpensearchDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.OpensearchDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpensearchDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions">AutoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dashboardEndpointV2">DashboardEndpointV2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointV2HostedZoneId">DomainEndpointV2HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest">EncryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpointV2">EndpointV2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption">NodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference">OpensearchDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference">OpensearchDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput">AccessPoliciesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput">AdvancedSecurityOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput">AutoTuneOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput">ClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput">CognitoOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput">DomainEndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput">EbsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput">EncryptAtRestInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput">LogPublishingOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput">NodeToNodeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.offPeakWindowOptionsInput">OffPeakWindowOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput">SnapshotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.softwareUpdateOptionsInput">SoftwareUpdateOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies">AccessPolicies</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions">AdvancedOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedSecurityOptions`<sup>Required</sup> <a name="AdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions"></a>

```go
func AdvancedSecurityOptions() OpensearchDomainAdvancedSecurityOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoTuneOptions`<sup>Required</sup> <a name="AutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions"></a>

```go
func AutoTuneOptions() OpensearchDomainAutoTuneOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a>

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig"></a>

```go
func ClusterConfig() OpensearchDomainClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a>

---

##### `CognitoOptions`<sup>Required</sup> <a name="CognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions"></a>

```go
func CognitoOptions() OpensearchDomainCognitoOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a>

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dashboardEndpoint"></a>

```go
func DashboardEndpoint() *string
```

- *Type:* *string

---

##### `DashboardEndpointV2`<sup>Required</sup> <a name="DashboardEndpointV2" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dashboardEndpointV2"></a>

```go
func DashboardEndpointV2() *string
```

- *Type:* *string

---

##### `DomainEndpointOptions`<sup>Required</sup> <a name="DomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions"></a>

```go
func DomainEndpointOptions() OpensearchDomainDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `DomainEndpointV2HostedZoneId`<sup>Required</sup> <a name="DomainEndpointV2HostedZoneId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointV2HostedZoneId"></a>

```go
func DomainEndpointV2HostedZoneId() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EbsOptions`<sup>Required</sup> <a name="EbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions"></a>

```go
func EbsOptions() OpensearchDomainEbsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a>

---

##### `EncryptAtRest`<sup>Required</sup> <a name="EncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest"></a>

```go
func EncryptAtRest() OpensearchDomainEncryptAtRestOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EndpointV2`<sup>Required</sup> <a name="EndpointV2" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpointV2"></a>

```go
func EndpointV2() *string
```

- *Type:* *string

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions"></a>

```go
func LogPublishingOptions() OpensearchDomainLogPublishingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a>

---

##### `NodeToNodeEncryption`<sup>Required</sup> <a name="NodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption"></a>

```go
func NodeToNodeEncryption() OpensearchDomainNodeToNodeEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `OffPeakWindowOptions`<sup>Required</sup> <a name="OffPeakWindowOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.offPeakWindowOptions"></a>

```go
func OffPeakWindowOptions() OpensearchDomainOffPeakWindowOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference">OpensearchDomainOffPeakWindowOptionsOutputReference</a>

---

##### `SnapshotOptions`<sup>Required</sup> <a name="SnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions"></a>

```go
func SnapshotOptions() OpensearchDomainSnapshotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a>

---

##### `SoftwareUpdateOptions`<sup>Required</sup> <a name="SoftwareUpdateOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.softwareUpdateOptions"></a>

```go
func SoftwareUpdateOptions() OpensearchDomainSoftwareUpdateOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference">OpensearchDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts"></a>

```go
func Timeouts() OpensearchDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions"></a>

```go
func VpcOptions() OpensearchDomainVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a>

---

##### `AccessPoliciesInput`<sup>Optional</sup> <a name="AccessPoliciesInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput"></a>

```go
func AccessPoliciesInput() *string
```

- *Type:* *string

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput"></a>

```go
func AdvancedOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdvancedSecurityOptionsInput`<sup>Optional</sup> <a name="AdvancedSecurityOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput"></a>

```go
func AdvancedSecurityOptionsInput() OpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `AutoTuneOptionsInput`<sup>Optional</sup> <a name="AutoTuneOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput"></a>

```go
func AutoTuneOptionsInput() OpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() OpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `CognitoOptionsInput`<sup>Optional</sup> <a name="CognitoOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput"></a>

```go
func CognitoOptionsInput() OpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `DomainEndpointOptionsInput`<sup>Optional</sup> <a name="DomainEndpointOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput"></a>

```go
func DomainEndpointOptionsInput() OpensearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EbsOptionsInput`<sup>Optional</sup> <a name="EbsOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput"></a>

```go
func EbsOptionsInput() OpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `EncryptAtRestInput`<sup>Optional</sup> <a name="EncryptAtRestInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput"></a>

```go
func EncryptAtRestInput() OpensearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `LogPublishingOptionsInput`<sup>Optional</sup> <a name="LogPublishingOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput"></a>

```go
func LogPublishingOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NodeToNodeEncryptionInput`<sup>Optional</sup> <a name="NodeToNodeEncryptionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput"></a>

```go
func NodeToNodeEncryptionInput() OpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `OffPeakWindowOptionsInput`<sup>Optional</sup> <a name="OffPeakWindowOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.offPeakWindowOptionsInput"></a>

```go
func OffPeakWindowOptionsInput() OpensearchDomainOffPeakWindowOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SnapshotOptionsInput`<sup>Optional</sup> <a name="SnapshotOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput"></a>

```go
func SnapshotOptionsInput() OpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `SoftwareUpdateOptionsInput`<sup>Optional</sup> <a name="SoftwareUpdateOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.softwareUpdateOptionsInput"></a>

```go
func SoftwareUpdateOptionsInput() OpensearchDomainSoftwareUpdateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput"></a>

```go
func VpcOptionsInput() OpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `AccessPolicies`<sup>Required</sup> <a name="AccessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies"></a>

```go
func AccessPolicies() *string
```

- *Type:* *string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions"></a>

```go
func AdvancedOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainAdvancedSecurityOptions <a name="OpensearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainAdvancedSecurityOptions {
	Enabled: interface{},
	AnonymousAuthEnabled: interface{},
	InternalUserDatabaseEnabled: interface{},
	MasterUserOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `AnonymousAuthEnabled`<sup>Optional</sup> <a name="AnonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```go
AnonymousAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}.

---

##### `InternalUserDatabaseEnabled`<sup>Optional</sup> <a name="InternalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```go
InternalUserDatabaseEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}.

---

##### `MasterUserOptions`<sup>Optional</sup> <a name="MasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```go
MasterUserOptions OpensearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_options OpensearchDomain#master_user_options}

---

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions {
	MasterUserArn: *string,
	MasterUserName: *string,
	MasterUserPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">MasterUserArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_name OpensearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_password OpensearchDomain#master_user_password}. |

---

##### `MasterUserArn`<sup>Optional</sup> <a name="MasterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```go
MasterUserArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```go
MasterUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_name OpensearchDomain#master_user_name}.

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```go
MasterUserPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#master_user_password OpensearchDomain#master_user_password}.

---

### OpensearchDomainAutoTuneOptions <a name="OpensearchDomainAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainAutoTuneOptions {
	DesiredState: *string,
	MaintenanceSchedule: interface{},
	RollbackOnDisable: *string,
	UseOffPeakWindow: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState">DesiredState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#desired_state OpensearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code>interface{}</code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable">RollbackOnDisable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.useOffPeakWindow">UseOffPeakWindow</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#use_off_peak_window OpensearchDomain#use_off_peak_window}. |

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#desired_state OpensearchDomain#desired_state}.

---

##### `MaintenanceSchedule`<sup>Optional</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```go
MaintenanceSchedule interface{}
```

- *Type:* interface{}

maintenance_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#maintenance_schedule OpensearchDomain#maintenance_schedule}

---

##### `RollbackOnDisable`<sup>Optional</sup> <a name="RollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```go
RollbackOnDisable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}.

---

##### `UseOffPeakWindow`<sup>Optional</sup> <a name="UseOffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.useOffPeakWindow"></a>

```go
UseOffPeakWindow interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#use_off_peak_window OpensearchDomain#use_off_peak_window}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceSchedule <a name="OpensearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule {
	CronExpressionForRecurrence: *string,
	Duration: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration,
	StartAt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">CronExpressionForRecurrence</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">StartAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#start_at OpensearchDomain#start_at}. |

---

##### `CronExpressionForRecurrence`<sup>Required</sup> <a name="CronExpressionForRecurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```go
CronExpressionForRecurrence *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```go
Duration OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#duration OpensearchDomain#duration}

---

##### `StartAt`<sup>Required</sup> <a name="StartAt" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```go
StartAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#start_at OpensearchDomain#start_at}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
	Unit: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#unit OpensearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#value OpensearchDomain#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#unit OpensearchDomain#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#value OpensearchDomain#value}.

---

### OpensearchDomainClusterConfig <a name="OpensearchDomainClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainClusterConfig {
	ColdStorageOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions,
	DedicatedMasterCount: *f64,
	DedicatedMasterEnabled: interface{},
	DedicatedMasterType: *string,
	InstanceCount: *f64,
	InstanceType: *string,
	MultiAzWithStandbyEnabled: interface{},
	NodeOptions: interface{},
	WarmCount: *f64,
	WarmEnabled: interface{},
	WarmType: *string,
	ZoneAwarenessConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig,
	ZoneAwarenessEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#instance_count OpensearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#instance_type OpensearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#multi_az_with_standby_enabled OpensearchDomain#multi_az_with_standby_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.nodeOptions">NodeOptions</a></code> | <code>interface{}</code> | node_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount">WarmCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#warm_count OpensearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled">WarmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType">WarmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#warm_type OpensearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}. |

---

##### `ColdStorageOptions`<sup>Optional</sup> <a name="ColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions"></a>

```go
ColdStorageOptions OpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cold_storage_options OpensearchDomain#cold_storage_options}

---

##### `DedicatedMasterCount`<sup>Optional</sup> <a name="DedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```go
DedicatedMasterCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}.

---

##### `DedicatedMasterEnabled`<sup>Optional</sup> <a name="DedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```go
DedicatedMasterEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}.

---

##### `DedicatedMasterType`<sup>Optional</sup> <a name="DedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType"></a>

```go
DedicatedMasterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#instance_count OpensearchDomain#instance_count}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#instance_type OpensearchDomain#instance_type}.

---

##### `MultiAzWithStandbyEnabled`<sup>Optional</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.multiAzWithStandbyEnabled"></a>

```go
MultiAzWithStandbyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#multi_az_with_standby_enabled OpensearchDomain#multi_az_with_standby_enabled}.

---

##### `NodeOptions`<sup>Optional</sup> <a name="NodeOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.nodeOptions"></a>

```go
NodeOptions interface{}
```

- *Type:* interface{}

node_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#node_options OpensearchDomain#node_options}

---

##### `WarmCount`<sup>Optional</sup> <a name="WarmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount"></a>

```go
WarmCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#warm_count OpensearchDomain#warm_count}.

---

##### `WarmEnabled`<sup>Optional</sup> <a name="WarmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled"></a>

```go
WarmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}.

---

##### `WarmType`<sup>Optional</sup> <a name="WarmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType"></a>

```go
WarmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#warm_type OpensearchDomain#warm_type}.

---

##### `ZoneAwarenessConfig`<sup>Optional</sup> <a name="ZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```go
ZoneAwarenessConfig OpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#zone_awareness_config OpensearchDomain#zone_awareness_config}

---

##### `ZoneAwarenessEnabled`<sup>Optional</sup> <a name="ZoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```go
ZoneAwarenessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}.

---

### OpensearchDomainClusterConfigColdStorageOptions <a name="OpensearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainClusterConfigColdStorageOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainClusterConfigNodeOptions <a name="OpensearchDomainClusterConfigNodeOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainClusterConfigNodeOptions {
	NodeConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig,
	NodeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptions.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptions.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#node_type OpensearchDomain#node_type}. |

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptions.property.nodeConfig"></a>

```go
NodeConfig OpensearchDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#node_config OpensearchDomain#node_config}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptions.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#node_type OpensearchDomain#node_type}.

---

### OpensearchDomainClusterConfigNodeOptionsNodeConfig <a name="OpensearchDomainClusterConfigNodeOptionsNodeConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig {
	Count: *f64,
	Enabled: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#count OpensearchDomain#count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#type OpensearchDomain#type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#count OpensearchDomain#count}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#type OpensearchDomain#type}.

---

### OpensearchDomainClusterConfigZoneAwarenessConfig <a name="OpensearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainClusterConfigZoneAwarenessConfig {
	AvailabilityZoneCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}. |

---

##### `AvailabilityZoneCount`<sup>Optional</sup> <a name="AvailabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```go
AvailabilityZoneCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}.

---

### OpensearchDomainCognitoOptions <a name="OpensearchDomainCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainCognitoOptions {
	IdentityPoolId: *string,
	RoleArn: *string,
	UserPoolId: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#role_arn OpensearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#role_arn OpensearchDomain#role_arn}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainConfig <a name="OpensearchDomainConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	AccessPolicies: *string,
	AdvancedOptions: *map[string]*string,
	AdvancedSecurityOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainAdvancedSecurityOptions,
	AutoTuneOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainAutoTuneOptions,
	ClusterConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainClusterConfig,
	CognitoOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainCognitoOptions,
	DomainEndpointOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainDomainEndpointOptions,
	EbsOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainEbsOptions,
	EncryptAtRest: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainEncryptAtRest,
	EngineVersion: *string,
	Id: *string,
	IpAddressType: *string,
	LogPublishingOptions: interface{},
	NodeToNodeEncryption: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainNodeToNodeEncryption,
	OffPeakWindowOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainOffPeakWindowOptions,
	Region: *string,
	SnapshotOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainSnapshotOptions,
	SoftwareUpdateOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainSoftwareUpdateOptions,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainTimeouts,
	VpcOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainVpcOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#domain_name OpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies">AccessPolicies</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#access_policies OpensearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions">AdvancedOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#advanced_options OpensearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions">AutoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest">EncryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#engine_version OpensearchDomain#engine_version}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#id OpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#ip_address_type OpensearchDomain#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions">LogPublishingOptions</a></code> | <code>interface{}</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption">NodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a></code> | off_peak_window_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a></code> | software_update_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#tags OpensearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#tags_all OpensearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#domain_name OpensearchDomain#domain_name}.

---

##### `AccessPolicies`<sup>Optional</sup> <a name="AccessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies"></a>

```go
AccessPolicies *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#access_policies OpensearchDomain#access_policies}.

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions"></a>

```go
AdvancedOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#advanced_options OpensearchDomain#advanced_options}.

---

##### `AdvancedSecurityOptions`<sup>Optional</sup> <a name="AdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions"></a>

```go
AdvancedSecurityOptions OpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}

---

##### `AutoTuneOptions`<sup>Optional</sup> <a name="AutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions"></a>

```go
AutoTuneOptions OpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}

---

##### `ClusterConfig`<sup>Optional</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig"></a>

```go
ClusterConfig OpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cluster_config OpensearchDomain#cluster_config}

---

##### `CognitoOptions`<sup>Optional</sup> <a name="CognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions"></a>

```go
CognitoOptions OpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cognito_options OpensearchDomain#cognito_options}

---

##### `DomainEndpointOptions`<sup>Optional</sup> <a name="DomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions"></a>

```go
DomainEndpointOptions OpensearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}

---

##### `EbsOptions`<sup>Optional</sup> <a name="EbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions"></a>

```go
EbsOptions OpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#ebs_options OpensearchDomain#ebs_options}

---

##### `EncryptAtRest`<sup>Optional</sup> <a name="EncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest"></a>

```go
EncryptAtRest OpensearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#engine_version OpensearchDomain#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#id OpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#ip_address_type OpensearchDomain#ip_address_type}.

---

##### `LogPublishingOptions`<sup>Optional</sup> <a name="LogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions"></a>

```go
LogPublishingOptions interface{}
```

- *Type:* interface{}

log_publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}

---

##### `NodeToNodeEncryption`<sup>Optional</sup> <a name="NodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption"></a>

```go
NodeToNodeEncryption OpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}

---

##### `OffPeakWindowOptions`<sup>Optional</sup> <a name="OffPeakWindowOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.offPeakWindowOptions"></a>

```go
OffPeakWindowOptions OpensearchDomainOffPeakWindowOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a>

off_peak_window_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#off_peak_window_options OpensearchDomain#off_peak_window_options}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#region OpensearchDomain#region}

---

##### `SnapshotOptions`<sup>Optional</sup> <a name="SnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions"></a>

```go
SnapshotOptions OpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}

---

##### `SoftwareUpdateOptions`<sup>Optional</sup> <a name="SoftwareUpdateOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.softwareUpdateOptions"></a>

```go
SoftwareUpdateOptions OpensearchDomainSoftwareUpdateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a>

software_update_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#software_update_options OpensearchDomain#software_update_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#tags OpensearchDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#tags_all OpensearchDomain#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts"></a>

```go
Timeouts OpensearchDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#timeouts OpensearchDomain#timeouts}

---

##### `VpcOptions`<sup>Optional</sup> <a name="VpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions"></a>

```go
VpcOptions OpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#vpc_options OpensearchDomain#vpc_options}

---

### OpensearchDomainDomainEndpointOptions <a name="OpensearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainDomainEndpointOptions {
	CustomEndpoint: *string,
	CustomEndpointCertificateArn: *string,
	CustomEndpointEnabled: interface{},
	EnforceHttps: interface{},
	TlsSecurityPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint">CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps">EnforceHttps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enforce_https OpensearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}. |

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```go
CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}.

---

##### `CustomEndpointCertificateArn`<sup>Optional</sup> <a name="CustomEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```go
CustomEndpointCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}.

---

##### `CustomEndpointEnabled`<sup>Optional</sup> <a name="CustomEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```go
CustomEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}.

---

##### `EnforceHttps`<sup>Optional</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```go
EnforceHttps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enforce_https OpensearchDomain#enforce_https}.

---

##### `TlsSecurityPolicy`<sup>Optional</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```go
TlsSecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}.

---

### OpensearchDomainEbsOptions <a name="OpensearchDomainEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainEbsOptions {
	EbsEnabled: interface{},
	Iops: *f64,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled">EbsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#iops OpensearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#throughput OpensearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#volume_size OpensearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#volume_type OpensearchDomain#volume_type}. |

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled"></a>

```go
EbsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#iops OpensearchDomain#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#throughput OpensearchDomain#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#volume_size OpensearchDomain#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#volume_type OpensearchDomain#volume_type}.

---

### OpensearchDomainEncryptAtRest <a name="OpensearchDomainEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainEncryptAtRest {
	Enabled: interface{},
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}.

---

### OpensearchDomainLogPublishingOptions <a name="OpensearchDomainLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainLogPublishingOptions {
	CloudwatchLogGroupArn: *string,
	LogType: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#log_type OpensearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```go
CloudwatchLogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#log_type OpensearchDomain#log_type}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainNodeToNodeEncryption <a name="OpensearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainNodeToNodeEncryption {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainOffPeakWindowOptions <a name="OpensearchDomainOffPeakWindowOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainOffPeakWindowOptions {
	Enabled: interface{},
	OffPeakWindow: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a></code> | off_peak_window block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `OffPeakWindow`<sup>Optional</sup> <a name="OffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions.property.offPeakWindow"></a>

```go
OffPeakWindow OpensearchDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a>

off_peak_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#off_peak_window OpensearchDomain#off_peak_window}

---

### OpensearchDomainOffPeakWindowOptionsOffPeakWindow <a name="OpensearchDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow {
	WindowStartTime: github.com/cdktf/cdktf-provider-aws-go/aws/v21.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | window_start_time block. |

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime"></a>

```go
WindowStartTime OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

window_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#window_start_time OpensearchDomain#window_start_time}

---

### OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#hours OpensearchDomain#hours}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#minutes OpensearchDomain#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#hours OpensearchDomain#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#minutes OpensearchDomain#minutes}.

---

### OpensearchDomainSnapshotOptions <a name="OpensearchDomainSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainSnapshotOptions {
	AutomatedSnapshotStartHour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}. |

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```go
AutomatedSnapshotStartHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}.

---

### OpensearchDomainSoftwareUpdateOptions <a name="OpensearchDomainSoftwareUpdateOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainSoftwareUpdateOptions {
	AutoSoftwareUpdateEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#auto_software_update_enabled OpensearchDomain#auto_software_update_enabled}. |

---

##### `AutoSoftwareUpdateEnabled`<sup>Optional</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled"></a>

```go
AutoSoftwareUpdateEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#auto_software_update_enabled OpensearchDomain#auto_software_update_enabled}.

---

### OpensearchDomainTimeouts <a name="OpensearchDomainTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#create OpensearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#delete OpensearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#update OpensearchDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#create OpensearchDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#delete OpensearchDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#update OpensearchDomain#update}.

---

### OpensearchDomainVpcOptions <a name="OpensearchDomainVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

&opensearchdomain.OpensearchDomainVpcOptions {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">ResetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMasterUserArn` <a name="ResetMasterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```go
func ResetMasterUserArn()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```go
func ResetMasterUserName()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```go
func ResetMasterUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">MasterUserArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">MasterUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MasterUserArnInput`<sup>Optional</sup> <a name="MasterUserArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```go
func MasterUserArnInput() *string
```

- *Type:* *string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```go
func MasterUserNameInput() *string
```

- *Type:* *string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```go
func MasterUserPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUserArn`<sup>Required</sup> <a name="MasterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```go
func MasterUserArn() *string
```

- *Type:* *string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```go
func MasterUserName() *string
```

- *Type:* *string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```go
func MasterUserPassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainAdvancedSecurityOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainAdvancedSecurityOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">PutMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">ResetAnonymousAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">ResetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">ResetMasterUserOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMasterUserOptions` <a name="PutMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```go
func PutMasterUserOptions(value OpensearchDomainAdvancedSecurityOptionsMasterUserOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `ResetAnonymousAuthEnabled` <a name="ResetAnonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```go
func ResetAnonymousAuthEnabled()
```

##### `ResetInternalUserDatabaseEnabled` <a name="ResetInternalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```go
func ResetInternalUserDatabaseEnabled()
```

##### `ResetMasterUserOptions` <a name="ResetMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```go
func ResetMasterUserOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">AnonymousAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">InternalUserDatabaseEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">MasterUserOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MasterUserOptions`<sup>Required</sup> <a name="MasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```go
func MasterUserOptions() OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `AnonymousAuthEnabledInput`<sup>Optional</sup> <a name="AnonymousAuthEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```go
func AnonymousAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InternalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="InternalUserDatabaseEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```go
func InternalUserDatabaseEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MasterUserOptionsInput`<sup>Optional</sup> <a name="MasterUserOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```go
func MasterUserOptionsInput() OpensearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `AnonymousAuthEnabled`<sup>Required</sup> <a name="AnonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```go
func AnonymousAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalUserDatabaseEnabled`<sup>Required</sup> <a name="InternalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```go
func InternalUserDatabaseEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainAutoTuneOptionsMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchDomainAutoTuneOptionsMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">PutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuration` <a name="PutDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```go
func PutDuration(value OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">CronExpressionForRecurrenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">DurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">StartAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">CronExpressionForRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">StartAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```go
func Duration() OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `CronExpressionForRecurrenceInput`<sup>Optional</sup> <a name="CronExpressionForRecurrenceInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```go
func CronExpressionForRecurrenceInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```go
func DurationInput() OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `StartAtInput`<sup>Optional</sup> <a name="StartAtInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```go
func StartAtInput() *string
```

- *Type:* *string

---

##### `CronExpressionForRecurrence`<sup>Required</sup> <a name="CronExpressionForRecurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```go
func CronExpressionForRecurrence() *string
```

- *Type:* *string

---

##### `StartAt`<sup>Required</sup> <a name="StartAt" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```go
func StartAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainAutoTuneOptionsOutputReference <a name="OpensearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainAutoTuneOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainAutoTuneOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">PutMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">ResetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">ResetRollbackOnDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetUseOffPeakWindow">ResetUseOffPeakWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceSchedule` <a name="PutMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```go
func PutMaintenanceSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaintenanceSchedule` <a name="ResetMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```go
func ResetMaintenanceSchedule()
```

##### `ResetRollbackOnDisable` <a name="ResetRollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```go
func ResetRollbackOnDisable()
```

##### `ResetUseOffPeakWindow` <a name="ResetUseOffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetUseOffPeakWindow"></a>

```go
func ResetUseOffPeakWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">MaintenanceScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">RollbackOnDisableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.useOffPeakWindowInput">UseOffPeakWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">RollbackOnDisable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.useOffPeakWindow">UseOffPeakWindow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() OpensearchDomainAutoTuneOptionsMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `MaintenanceScheduleInput`<sup>Optional</sup> <a name="MaintenanceScheduleInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```go
func MaintenanceScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `RollbackOnDisableInput`<sup>Optional</sup> <a name="RollbackOnDisableInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```go
func RollbackOnDisableInput() *string
```

- *Type:* *string

---

##### `UseOffPeakWindowInput`<sup>Optional</sup> <a name="UseOffPeakWindowInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.useOffPeakWindowInput"></a>

```go
func UseOffPeakWindowInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `RollbackOnDisable`<sup>Required</sup> <a name="RollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```go
func RollbackOnDisable() *string
```

- *Type:* *string

---

##### `UseOffPeakWindow`<sup>Required</sup> <a name="UseOffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.useOffPeakWindow"></a>

```go
func UseOffPeakWindow() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---


### OpensearchDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainClusterConfigColdStorageOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainClusterConfigColdStorageOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---


### OpensearchDomainClusterConfigNodeOptionsList <a name="OpensearchDomainClusterConfigNodeOptionsList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainClusterConfigNodeOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchDomainClusterConfigNodeOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.get"></a>

```go
func Get(index *f64) OpensearchDomainClusterConfigNodeOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a>

---


### OpensearchDomainClusterConfigNodeOptionsOutputReference <a name="OpensearchDomainClusterConfigNodeOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainClusterConfigNodeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchDomainClusterConfigNodeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resetNodeType">ResetNodeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.putNodeConfig"></a>

```go
func PutNodeConfig(value OpensearchDomainClusterConfigNodeOptionsNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.resetNodeType"></a>

```go
func ResetNodeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```go
func NodeConfig() OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput"></a>

```go
func NodeConfigInput() OpensearchDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsNodeConfig">OpensearchDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainClusterConfigOutputReference <a name="OpensearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions">PutColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putNodeOptions">PutNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">PutZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions">ResetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">ResetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">ResetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType">ResetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled">ResetMultiAzWithStandbyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetNodeOptions">ResetNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount">ResetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled">ResetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType">ResetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">ResetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">ResetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColdStorageOptions` <a name="PutColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```go
func PutColdStorageOptions(value OpensearchDomainClusterConfigColdStorageOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `PutNodeOptions` <a name="PutNodeOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putNodeOptions"></a>

```go
func PutNodeOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putNodeOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutZoneAwarenessConfig` <a name="PutZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```go
func PutZoneAwarenessConfig(value OpensearchDomainClusterConfigZoneAwarenessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ResetColdStorageOptions` <a name="ResetColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```go
func ResetColdStorageOptions()
```

##### `ResetDedicatedMasterCount` <a name="ResetDedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```go
func ResetDedicatedMasterCount()
```

##### `ResetDedicatedMasterEnabled` <a name="ResetDedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```go
func ResetDedicatedMasterEnabled()
```

##### `ResetDedicatedMasterType` <a name="ResetDedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```go
func ResetDedicatedMasterType()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetMultiAzWithStandbyEnabled` <a name="ResetMultiAzWithStandbyEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled"></a>

```go
func ResetMultiAzWithStandbyEnabled()
```

##### `ResetNodeOptions` <a name="ResetNodeOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetNodeOptions"></a>

```go
func ResetNodeOptions()
```

##### `ResetWarmCount` <a name="ResetWarmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```go
func ResetWarmCount()
```

##### `ResetWarmEnabled` <a name="ResetWarmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```go
func ResetWarmEnabled()
```

##### `ResetWarmType` <a name="ResetWarmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType"></a>

```go
func ResetWarmType()
```

##### `ResetZoneAwarenessConfig` <a name="ResetZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```go
func ResetZoneAwarenessConfig()
```

##### `ResetZoneAwarenessEnabled` <a name="ResetZoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```go
func ResetZoneAwarenessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.nodeOptions">NodeOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList">OpensearchDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">ColdStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">DedicatedMasterCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">DedicatedMasterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">DedicatedMasterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput">MultiAzWithStandbyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.nodeOptionsInput">NodeOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput">WarmCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput">WarmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput">WarmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">ZoneAwarenessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">ZoneAwarenessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount">WarmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled">WarmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType">WarmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageOptions`<sup>Required</sup> <a name="ColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```go
func ColdStorageOptions() OpensearchDomainClusterConfigColdStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `NodeOptions`<sup>Required</sup> <a name="NodeOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.nodeOptions"></a>

```go
func NodeOptions() OpensearchDomainClusterConfigNodeOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigNodeOptionsList">OpensearchDomainClusterConfigNodeOptionsList</a>

---

##### `ZoneAwarenessConfig`<sup>Required</sup> <a name="ZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```go
func ZoneAwarenessConfig() OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `ColdStorageOptionsInput`<sup>Optional</sup> <a name="ColdStorageOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```go
func ColdStorageOptionsInput() OpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `DedicatedMasterCountInput`<sup>Optional</sup> <a name="DedicatedMasterCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```go
func DedicatedMasterCountInput() *f64
```

- *Type:* *f64

---

##### `DedicatedMasterEnabledInput`<sup>Optional</sup> <a name="DedicatedMasterEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```go
func DedicatedMasterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterTypeInput`<sup>Optional</sup> <a name="DedicatedMasterTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```go
func DedicatedMasterTypeInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `MultiAzWithStandbyEnabledInput`<sup>Optional</sup> <a name="MultiAzWithStandbyEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput"></a>

```go
func MultiAzWithStandbyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeOptionsInput`<sup>Optional</sup> <a name="NodeOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.nodeOptionsInput"></a>

```go
func NodeOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `WarmCountInput`<sup>Optional</sup> <a name="WarmCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```go
func WarmCountInput() *f64
```

- *Type:* *f64

---

##### `WarmEnabledInput`<sup>Optional</sup> <a name="WarmEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```go
func WarmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WarmTypeInput`<sup>Optional</sup> <a name="WarmTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```go
func WarmTypeInput() *string
```

- *Type:* *string

---

##### `ZoneAwarenessConfigInput`<sup>Optional</sup> <a name="ZoneAwarenessConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```go
func ZoneAwarenessConfigInput() OpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ZoneAwarenessEnabledInput`<sup>Optional</sup> <a name="ZoneAwarenessEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```go
func ZoneAwarenessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterCount`<sup>Required</sup> <a name="DedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```go
func DedicatedMasterCount() *f64
```

- *Type:* *f64

---

##### `DedicatedMasterEnabled`<sup>Required</sup> <a name="DedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```go
func DedicatedMasterEnabled() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterType`<sup>Required</sup> <a name="DedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```go
func DedicatedMasterType() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `MultiAzWithStandbyEnabled`<sup>Required</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```go
func MultiAzWithStandbyEnabled() interface{}
```

- *Type:* interface{}

---

##### `WarmCount`<sup>Required</sup> <a name="WarmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount"></a>

```go
func WarmCount() *f64
```

- *Type:* *f64

---

##### `WarmEnabled`<sup>Required</sup> <a name="WarmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```go
func WarmEnabled() interface{}
```

- *Type:* interface{}

---

##### `WarmType`<sup>Required</sup> <a name="WarmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType"></a>

```go
func WarmType() *string
```

- *Type:* *string

---

##### `ZoneAwarenessEnabled`<sup>Required</sup> <a name="ZoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```go
func ZoneAwarenessEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---


### OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">ResetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneCount` <a name="ResetAvailabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```go
func ResetAvailabilityZoneCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">AvailabilityZoneCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneCountInput`<sup>Optional</sup> <a name="AvailabilityZoneCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```go
func AvailabilityZoneCountInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZoneCount`<sup>Required</sup> <a name="AvailabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```go
func AvailabilityZoneCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchDomainCognitoOptionsOutputReference <a name="OpensearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainCognitoOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainCognitoOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---


### OpensearchDomainDomainEndpointOptionsOutputReference <a name="OpensearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainDomainEndpointOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainDomainEndpointOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">ResetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">ResetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">ResetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">ResetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```go
func ResetCustomEndpoint()
```

##### `ResetCustomEndpointCertificateArn` <a name="ResetCustomEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```go
func ResetCustomEndpointCertificateArn()
```

##### `ResetCustomEndpointEnabled` <a name="ResetCustomEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```go
func ResetCustomEndpointEnabled()
```

##### `ResetEnforceHttps` <a name="ResetEnforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```go
func ResetEnforceHttps()
```

##### `ResetTlsSecurityPolicy` <a name="ResetTlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```go
func ResetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">CustomEndpointCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">CustomEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">EnforceHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">TlsSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEndpointCertificateArnInput`<sup>Optional</sup> <a name="CustomEndpointCertificateArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```go
func CustomEndpointCertificateArnInput() *string
```

- *Type:* *string

---

##### `CustomEndpointEnabledInput`<sup>Optional</sup> <a name="CustomEndpointEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```go
func CustomEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```go
func CustomEndpointInput() *string
```

- *Type:* *string

---

##### `EnforceHttpsInput`<sup>Optional</sup> <a name="EnforceHttpsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```go
func EnforceHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsSecurityPolicyInput`<sup>Optional</sup> <a name="TlsSecurityPolicyInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```go
func TlsSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```go
func CustomEndpoint() *string
```

- *Type:* *string

---

##### `CustomEndpointCertificateArn`<sup>Required</sup> <a name="CustomEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```go
func CustomEndpointCertificateArn() *string
```

- *Type:* *string

---

##### `CustomEndpointEnabled`<sup>Required</sup> <a name="CustomEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```go
func CustomEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```go
func EnforceHttps() interface{}
```

- *Type:* interface{}

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```go
func TlsSecurityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---


### OpensearchDomainEbsOptionsOutputReference <a name="OpensearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainEbsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainEbsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">EbsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled">EbsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsEnabledInput`<sup>Optional</sup> <a name="EbsEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```go
func EbsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```go
func EbsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---


### OpensearchDomainEncryptAtRestOutputReference <a name="OpensearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainEncryptAtRestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainEncryptAtRestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---


### OpensearchDomainLogPublishingOptionsList <a name="OpensearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainLogPublishingOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchDomainLogPublishingOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get"></a>

```go
func Get(index *f64) OpensearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainLogPublishingOptionsOutputReference <a name="OpensearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainLogPublishingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchDomainLogPublishingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```go
func CloudwatchLogGroupArnInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```go
func CloudwatchLogGroupArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainNodeToNodeEncryptionOutputReference <a name="OpensearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainNodeToNodeEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainNodeToNodeEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---


### OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime"></a>

```go
func PutWindowStartTime(value OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime"></a>

```go
func ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput"></a>

```go
func WindowStartTimeInput() OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### OpensearchDomainOffPeakWindowOptionsOutputReference <a name="OpensearchDomainOffPeakWindowOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainOffPeakWindowOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainOffPeakWindowOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow">PutOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow">ResetOffPeakWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOffPeakWindow` <a name="PutOffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow"></a>

```go
func PutOffPeakWindow(value OpensearchDomainOffPeakWindowOptionsOffPeakWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetOffPeakWindow` <a name="ResetOffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow"></a>

```go
func ResetOffPeakWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput">OffPeakWindowInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffPeakWindow`<sup>Required</sup> <a name="OffPeakWindow" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```go
func OffPeakWindow() OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OffPeakWindowInput`<sup>Optional</sup> <a name="OffPeakWindowInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput"></a>

```go
func OffPeakWindowInput() OpensearchDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOffPeakWindow">OpensearchDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainOffPeakWindowOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainOffPeakWindowOptions">OpensearchDomainOffPeakWindowOptions</a>

---


### OpensearchDomainSnapshotOptionsOutputReference <a name="OpensearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainSnapshotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainSnapshotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">AutomatedSnapshotStartHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotStartHourInput`<sup>Optional</sup> <a name="AutomatedSnapshotStartHourInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```go
func AutomatedSnapshotStartHourInput() *f64
```

- *Type:* *f64

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```go
func AutomatedSnapshotStartHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---


### OpensearchDomainSoftwareUpdateOptionsOutputReference <a name="OpensearchDomainSoftwareUpdateOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainSoftwareUpdateOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainSoftwareUpdateOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled">ResetAutoSoftwareUpdateEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoSoftwareUpdateEnabled` <a name="ResetAutoSoftwareUpdateEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled"></a>

```go
func ResetAutoSoftwareUpdateEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput">AutoSoftwareUpdateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoSoftwareUpdateEnabledInput`<sup>Optional</sup> <a name="AutoSoftwareUpdateEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput"></a>

```go
func AutoSoftwareUpdateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoSoftwareUpdateEnabled`<sup>Required</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```go
func AutoSoftwareUpdateEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainSoftwareUpdateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSoftwareUpdateOptions">OpensearchDomainSoftwareUpdateOptions</a>

---


### OpensearchDomainTimeoutsOutputReference <a name="OpensearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchDomainVpcOptionsOutputReference <a name="OpensearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/opensearchdomain"

opensearchdomain.NewOpensearchDomainVpcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainVpcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---



