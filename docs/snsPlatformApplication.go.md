# `snsPlatformApplication` Submodule <a name="`snsPlatformApplication` Submodule" id="@cdktf/provider-aws.snsPlatformApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsPlatformApplication <a name="SnsPlatformApplication" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snsplatformapplication"

snsplatformapplication.NewSnsPlatformApplication(scope Construct, id *string, config SnsPlatformApplicationConfig) SnsPlatformApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig">SnsPlatformApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig">SnsPlatformApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId">ResetApplePlatformBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId">ResetApplePlatformTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn">ResetEventDeliveryFailureTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn">ResetEventEndpointCreatedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn">ResetEventEndpointDeletedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn">ResetEventEndpointUpdatedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn">ResetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal">ResetPlatformPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn">ResetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate">ResetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApplePlatformBundleId` <a name="ResetApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId"></a>

```go
func ResetApplePlatformBundleId()
```

##### `ResetApplePlatformTeamId` <a name="ResetApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId"></a>

```go
func ResetApplePlatformTeamId()
```

##### `ResetEventDeliveryFailureTopicArn` <a name="ResetEventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn"></a>

```go
func ResetEventDeliveryFailureTopicArn()
```

##### `ResetEventEndpointCreatedTopicArn` <a name="ResetEventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn"></a>

```go
func ResetEventEndpointCreatedTopicArn()
```

##### `ResetEventEndpointDeletedTopicArn` <a name="ResetEventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn"></a>

```go
func ResetEventEndpointDeletedTopicArn()
```

##### `ResetEventEndpointUpdatedTopicArn` <a name="ResetEventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn"></a>

```go
func ResetEventEndpointUpdatedTopicArn()
```

##### `ResetFailureFeedbackRoleArn` <a name="ResetFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn"></a>

```go
func ResetFailureFeedbackRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetPlatformPrincipal` <a name="ResetPlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal"></a>

```go
func ResetPlatformPrincipal()
```

##### `ResetSuccessFeedbackRoleArn` <a name="ResetSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn"></a>

```go
func ResetSuccessFeedbackRoleArn()
```

##### `ResetSuccessFeedbackSampleRate` <a name="ResetSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate"></a>

```go
func ResetSuccessFeedbackSampleRate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snsplatformapplication"

snsplatformapplication.SnsPlatformApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snsplatformapplication"

snsplatformapplication.SnsPlatformApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snsplatformapplication"

snsplatformapplication.SnsPlatformApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput">ApplePlatformBundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput">ApplePlatformTeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput">EventDeliveryFailureTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput">EventEndpointCreatedTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput">EventEndpointDeletedTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput">EventEndpointUpdatedTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput">FailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput">PlatformCredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput">PlatformPrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput">SuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput">SuccessFeedbackSampleRateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId">ApplePlatformBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId">ApplePlatformTeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn">EventDeliveryFailureTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn">EventEndpointCreatedTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn">EventEndpointDeletedTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn">EventEndpointUpdatedTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential">PlatformCredential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal">PlatformPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ApplePlatformBundleIdInput`<sup>Optional</sup> <a name="ApplePlatformBundleIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput"></a>

```go
func ApplePlatformBundleIdInput() *string
```

- *Type:* *string

---

##### `ApplePlatformTeamIdInput`<sup>Optional</sup> <a name="ApplePlatformTeamIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput"></a>

```go
func ApplePlatformTeamIdInput() *string
```

- *Type:* *string

---

##### `EventDeliveryFailureTopicArnInput`<sup>Optional</sup> <a name="EventDeliveryFailureTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput"></a>

```go
func EventDeliveryFailureTopicArnInput() *string
```

- *Type:* *string

---

##### `EventEndpointCreatedTopicArnInput`<sup>Optional</sup> <a name="EventEndpointCreatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput"></a>

```go
func EventEndpointCreatedTopicArnInput() *string
```

- *Type:* *string

---

##### `EventEndpointDeletedTopicArnInput`<sup>Optional</sup> <a name="EventEndpointDeletedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput"></a>

```go
func EventEndpointDeletedTopicArnInput() *string
```

- *Type:* *string

---

##### `EventEndpointUpdatedTopicArnInput`<sup>Optional</sup> <a name="EventEndpointUpdatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput"></a>

```go
func EventEndpointUpdatedTopicArnInput() *string
```

- *Type:* *string

---

##### `FailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput"></a>

```go
func FailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlatformCredentialInput`<sup>Optional</sup> <a name="PlatformCredentialInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput"></a>

```go
func PlatformCredentialInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `PlatformPrincipalInput`<sup>Optional</sup> <a name="PlatformPrincipalInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput"></a>

```go
func PlatformPrincipalInput() *string
```

- *Type:* *string

---

##### `SuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput"></a>

```go
func SuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `SuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput"></a>

```go
func SuccessFeedbackSampleRateInput() *string
```

- *Type:* *string

---

##### `ApplePlatformBundleId`<sup>Required</sup> <a name="ApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId"></a>

```go
func ApplePlatformBundleId() *string
```

- *Type:* *string

---

##### `ApplePlatformTeamId`<sup>Required</sup> <a name="ApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId"></a>

```go
func ApplePlatformTeamId() *string
```

- *Type:* *string

---

##### `EventDeliveryFailureTopicArn`<sup>Required</sup> <a name="EventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn"></a>

```go
func EventDeliveryFailureTopicArn() *string
```

- *Type:* *string

---

##### `EventEndpointCreatedTopicArn`<sup>Required</sup> <a name="EventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn"></a>

```go
func EventEndpointCreatedTopicArn() *string
```

- *Type:* *string

---

##### `EventEndpointDeletedTopicArn`<sup>Required</sup> <a name="EventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn"></a>

```go
func EventEndpointDeletedTopicArn() *string
```

- *Type:* *string

---

##### `EventEndpointUpdatedTopicArn`<sup>Required</sup> <a name="EventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn"></a>

```go
func EventEndpointUpdatedTopicArn() *string
```

- *Type:* *string

---

##### `FailureFeedbackRoleArn`<sup>Required</sup> <a name="FailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn"></a>

```go
func FailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `PlatformCredential`<sup>Required</sup> <a name="PlatformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential"></a>

```go
func PlatformCredential() *string
```

- *Type:* *string

---

##### `PlatformPrincipal`<sup>Required</sup> <a name="PlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal"></a>

```go
func PlatformPrincipal() *string
```

- *Type:* *string

---

##### `SuccessFeedbackRoleArn`<sup>Required</sup> <a name="SuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn"></a>

```go
func SuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `SuccessFeedbackSampleRate`<sup>Required</sup> <a name="SuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate"></a>

```go
func SuccessFeedbackSampleRate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsPlatformApplicationConfig <a name="SnsPlatformApplicationConfig" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snsplatformapplication"

&snsplatformapplication.SnsPlatformApplicationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Platform: *string,
	PlatformCredential: *string,
	ApplePlatformBundleId: *string,
	ApplePlatformTeamId: *string,
	EventDeliveryFailureTopicArn: *string,
	EventEndpointCreatedTopicArn: *string,
	EventEndpointDeletedTopicArn: *string,
	EventEndpointUpdatedTopicArn: *string,
	FailureFeedbackRoleArn: *string,
	Id: *string,
	PlatformPrincipal: *string,
	SuccessFeedbackRoleArn: *string,
	SuccessFeedbackSampleRate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform">Platform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential">PlatformCredential</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId">ApplePlatformBundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId">ApplePlatformTeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn">EventDeliveryFailureTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn">EventEndpointCreatedTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn">EventEndpointDeletedTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn">EventEndpointUpdatedTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal">PlatformPrincipal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `PlatformCredential`<sup>Required</sup> <a name="PlatformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential"></a>

```go
PlatformCredential *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `ApplePlatformBundleId`<sup>Optional</sup> <a name="ApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId"></a>

```go
ApplePlatformBundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `ApplePlatformTeamId`<sup>Optional</sup> <a name="ApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId"></a>

```go
ApplePlatformTeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `EventDeliveryFailureTopicArn`<sup>Optional</sup> <a name="EventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn"></a>

```go
EventDeliveryFailureTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `EventEndpointCreatedTopicArn`<sup>Optional</sup> <a name="EventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn"></a>

```go
EventEndpointCreatedTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `EventEndpointDeletedTopicArn`<sup>Optional</sup> <a name="EventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn"></a>

```go
EventEndpointDeletedTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `EventEndpointUpdatedTopicArn`<sup>Optional</sup> <a name="EventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn"></a>

```go
EventEndpointUpdatedTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `FailureFeedbackRoleArn`<sup>Optional</sup> <a name="FailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn"></a>

```go
FailureFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlatformPrincipal`<sup>Optional</sup> <a name="PlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal"></a>

```go
PlatformPrincipal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `SuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn"></a>

```go
SuccessFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `SuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate"></a>

```go
SuccessFeedbackSampleRate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

---



