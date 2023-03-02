# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktf/provider-aws.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary aws_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanary(scope Construct, id *string, config SyntheticsCanaryConfig) SyntheticsCanary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putArtifactConfig">PutArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putRunConfig">PutRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">ResetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetDeleteLambda">ResetDeleteLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">ResetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetRunConfig">ResetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Version">ResetS3Version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetStartCanary">ResetStartCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">ResetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetZipFile">ResetZipFile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutArtifactConfig` <a name="PutArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```go
func PutArtifactConfig(value SyntheticsCanaryArtifactConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `PutRunConfig` <a name="PutRunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```go
func PutRunConfig(value SyntheticsCanaryRunConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```go
func PutSchedule(value SyntheticsCanarySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```go
func PutVpcConfig(value SyntheticsCanaryVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `ResetArtifactConfig` <a name="ResetArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```go
func ResetArtifactConfig()
```

##### `ResetDeleteLambda` <a name="ResetDeleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetDeleteLambda"></a>

```go
func ResetDeleteLambda()
```

##### `ResetFailureRetentionPeriod` <a name="ResetFailureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```go
func ResetFailureRetentionPeriod()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetId"></a>

```go
func ResetId()
```

##### `ResetRunConfig` <a name="ResetRunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```go
func ResetRunConfig()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Key"></a>

```go
func ResetS3Key()
```

##### `ResetS3Version` <a name="ResetS3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Version"></a>

```go
func ResetS3Version()
```

##### `ResetStartCanary` <a name="ResetStartCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetStartCanary"></a>

```go
func ResetStartCanary()
```

##### `ResetSuccessRetentionPeriod` <a name="ResetSuccessRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```go
func ResetSuccessRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

##### `ResetZipFile` <a name="ResetZipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetZipFile"></a>

```go
func ResetZipFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.SyntheticsCanary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.SyntheticsCanary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.SyntheticsCanary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.engineArn">EngineArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.timeline">Timeline</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList">SyntheticsCanaryTimelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">ArtifactConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">ArtifactS3LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambdaInput">DeleteLambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">FailureRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handlerInput">HandlerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfigInput">RunConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3VersionInput">S3VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanaryInput">StartCanaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">SuccessRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFileInput">ZipFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">ArtifactS3Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambda">DeleteLambda</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handler">Handler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Version">S3Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanary">StartCanary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFile">ZipFile</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ArtifactConfig`<sup>Required</sup> <a name="ArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```go
func ArtifactConfig() SyntheticsCanaryArtifactConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `EngineArn`<sup>Required</sup> <a name="EngineArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.engineArn"></a>

```go
func EngineArn() *string
```

- *Type:* *string

---

##### `RunConfig`<sup>Required</sup> <a name="RunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```go
func RunConfig() SyntheticsCanaryRunConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```go
func Schedule() SyntheticsCanaryScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.sourceLocationArn"></a>

```go
func SourceLocationArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeline`<sup>Required</sup> <a name="Timeline" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.timeline"></a>

```go
func Timeline() SyntheticsCanaryTimelineList
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList">SyntheticsCanaryTimelineList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```go
func VpcConfig() SyntheticsCanaryVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `ArtifactConfigInput`<sup>Optional</sup> <a name="ArtifactConfigInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```go
func ArtifactConfigInput() SyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `ArtifactS3LocationInput`<sup>Optional</sup> <a name="ArtifactS3LocationInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```go
func ArtifactS3LocationInput() *string
```

- *Type:* *string

---

##### `DeleteLambdaInput`<sup>Optional</sup> <a name="DeleteLambdaInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambdaInput"></a>

```go
func DeleteLambdaInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `FailureRetentionPeriodInput`<sup>Optional</sup> <a name="FailureRetentionPeriodInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```go
func FailureRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handlerInput"></a>

```go
func HandlerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RunConfigInput`<sup>Optional</sup> <a name="RunConfigInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```go
func RunConfigInput() SyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3VersionInput`<sup>Optional</sup> <a name="S3VersionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3VersionInput"></a>

```go
func S3VersionInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```go
func ScheduleInput() SyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `StartCanaryInput`<sup>Optional</sup> <a name="StartCanaryInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanaryInput"></a>

```go
func StartCanaryInput() interface{}
```

- *Type:* interface{}

---

##### `SuccessRetentionPeriodInput`<sup>Optional</sup> <a name="SuccessRetentionPeriodInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```go
func SuccessRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```go
func VpcConfigInput() SyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `ZipFileInput`<sup>Optional</sup> <a name="ZipFileInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFileInput"></a>

```go
func ZipFileInput() *string
```

- *Type:* *string

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```go
func ArtifactS3Location() *string
```

- *Type:* *string

---

##### `DeleteLambda`<sup>Required</sup> <a name="DeleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambda"></a>

```go
func DeleteLambda() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `FailureRetentionPeriod`<sup>Required</sup> <a name="FailureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```go
func FailureRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handler"></a>

```go
func Handler() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `S3Version`<sup>Required</sup> <a name="S3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Version"></a>

```go
func S3Version() *string
```

- *Type:* *string

---

##### `StartCanary`<sup>Required</sup> <a name="StartCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanary"></a>

```go
func StartCanary() interface{}
```

- *Type:* interface{}

---

##### `SuccessRetentionPeriod`<sup>Required</sup> <a name="SuccessRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```go
func SuccessRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZipFile`<sup>Required</sup> <a name="ZipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFile"></a>

```go
func ZipFile() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanaryArtifactConfig {
	S3Encryption: github.com/cdktf/cdktf-provider-aws-go/aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | s3_encryption block. |

---

##### `S3Encryption`<sup>Optional</sup> <a name="S3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```go
S3Encryption SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

s3_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanaryArtifactConfigS3Encryption {
	EncryptionMode: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}. |

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```go
EncryptionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}.

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanaryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactS3Location: *string,
	ExecutionRoleArn: *string,
	Handler: *string,
	Name: *string,
	RuntimeVersion: *string,
	Schedule: github.com/cdktf/cdktf-provider-aws-go/aws.syntheticsCanary.SyntheticsCanarySchedule,
	ArtifactConfig: github.com/cdktf/cdktf-provider-aws-go/aws.syntheticsCanary.SyntheticsCanaryArtifactConfig,
	DeleteLambda: interface{},
	FailureRetentionPeriod: *f64,
	Id: *string,
	RunConfig: github.com/cdktf/cdktf-provider-aws-go/aws.syntheticsCanary.SyntheticsCanaryRunConfig,
	S3Bucket: *string,
	S3Key: *string,
	S3Version: *string,
	StartCanary: interface{},
	SuccessRetentionPeriod: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.syntheticsCanary.SyntheticsCanaryVpcConfig,
	ZipFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">ArtifactS3Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.handler">Handler</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | artifact_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambda">DeleteLambda</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | run_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Version">S3Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.startCanary">StartCanary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.zipFile">ZipFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```go
ArtifactS3Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}.

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}.

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.handler"></a>

```go
Handler *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}.

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```go
Schedule SyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `ArtifactConfig`<sup>Optional</sup> <a name="ArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```go
ArtifactConfig SyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

artifact_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `DeleteLambda`<sup>Optional</sup> <a name="DeleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambda"></a>

```go
DeleteLambda interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}.

---

##### `FailureRetentionPeriod`<sup>Optional</sup> <a name="FailureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```go
FailureRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunConfig`<sup>Optional</sup> <a name="RunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```go
RunConfig SyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

run_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `S3Version`<sup>Optional</sup> <a name="S3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Version"></a>

```go
S3Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}.

---

##### `StartCanary`<sup>Optional</sup> <a name="StartCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.startCanary"></a>

```go
StartCanary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}.

---

##### `SuccessRetentionPeriod`<sup>Optional</sup> <a name="SuccessRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```go
SuccessRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```go
VpcConfig SyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

##### `ZipFile`<sup>Optional</sup> <a name="ZipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.zipFile"></a>

```go
ZipFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}.

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanaryRunConfig {
	ActiveTracing: interface{},
	EnvironmentVariables: *map[string]*string,
	MemoryInMb: *f64,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">ActiveTracing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">MemoryInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}. |

---

##### `ActiveTracing`<sup>Optional</sup> <a name="ActiveTracing" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```go
ActiveTracing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}.

---

##### `MemoryInMb`<sup>Optional</sup> <a name="MemoryInMb" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```go
MemoryInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}.

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanarySchedule {
	Expression: *string,
	DurationInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">DurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `DurationInSeconds`<sup>Optional</sup> <a name="DurationInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```go
DurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

### SyntheticsCanaryTimeline <a name="SyntheticsCanaryTimeline" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanaryTimeline {

}
```


### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

&syntheticscanary.SyntheticsCanaryVpcConfig {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryArtifactConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryArtifactConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">PutS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">ResetS3Encryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Encryption` <a name="PutS3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```go
func PutS3Encryption(value SyntheticsCanaryArtifactConfigS3Encryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `ResetS3Encryption` <a name="ResetS3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```go
func ResetS3Encryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">S3EncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```go
func S3Encryption() SyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `S3EncryptionInput`<sup>Optional</sup> <a name="S3EncryptionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```go
func S3EncryptionInput() SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```go
func ResetEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```go
func EncryptionModeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryRunConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryRunConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">ResetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">ResetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveTracing` <a name="ResetActiveTracing" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```go
func ResetActiveTracing()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetMemoryInMb` <a name="ResetMemoryInMb" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```go
func ResetMemoryInMb()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">ActiveTracingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">MemoryInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">ActiveTracing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">MemoryInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveTracingInput`<sup>Optional</sup> <a name="ActiveTracingInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```go
func ActiveTracingInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryInMbInput`<sup>Optional</sup> <a name="MemoryInMbInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```go
func MemoryInMbInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ActiveTracing`<sup>Required</sup> <a name="ActiveTracing" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```go
func ActiveTracing() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryInMb`<sup>Required</sup> <a name="MemoryInMb" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```go
func MemoryInMb() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">ResetDurationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInSeconds` <a name="ResetDurationInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```go
func ResetDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">DurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInSecondsInput`<sup>Optional</sup> <a name="DurationInSecondsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```go
func DurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```go
func DurationInSeconds() *f64
```

- *Type:* *f64

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryTimelineList <a name="SyntheticsCanaryTimelineList" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryTimelineList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryTimelineList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryTimelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SyntheticsCanaryTimelineOutputReference <a name="SyntheticsCanaryTimelineOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryTimelineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryTimelineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStarted">LastStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStopped">LastStopped</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline">SyntheticsCanaryTimeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `LastStarted`<sup>Required</sup> <a name="LastStarted" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStarted"></a>

```go
func LastStarted() *string
```

- *Type:* *string

---

##### `LastStopped`<sup>Required</sup> <a name="LastStopped" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStopped"></a>

```go
func LastStopped() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsCanaryTimeline
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline">SyntheticsCanaryTimeline</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---



