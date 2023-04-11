# `appautoscalingPolicy` Submodule <a name="`appautoscalingPolicy` Submodule" id="@cdktf/provider-aws.appautoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingPolicy <a name="AppautoscalingPolicy" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy aws_appautoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicy(scope Construct, id *string, config AppautoscalingPolicyConfig) AppautoscalingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig">AppautoscalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig">AppautoscalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration">PutStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration">PutTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetStepScalingPolicyConfiguration">ResetStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetTargetTrackingScalingPolicyConfiguration">ResetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutStepScalingPolicyConfiguration` <a name="PutStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration"></a>

```go
func PutStepScalingPolicyConfiguration(value AppautoscalingPolicyStepScalingPolicyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---

##### `PutTargetTrackingScalingPolicyConfiguration` <a name="PutTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration"></a>

```go
func PutTargetTrackingScalingPolicyConfiguration(value AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetPolicyType"></a>

```go
func ResetPolicyType()
```

##### `ResetStepScalingPolicyConfiguration` <a name="ResetStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetStepScalingPolicyConfiguration"></a>

```go
func ResetStepScalingPolicyConfiguration()
```

##### `ResetTargetTrackingScalingPolicyConfiguration` <a name="ResetTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetTargetTrackingScalingPolicyConfiguration"></a>

```go
func ResetTargetTrackingScalingPolicyConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.AppautoscalingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.AppautoscalingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.AppautoscalingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.alarmArns">AlarmArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfiguration">StepScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference">AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimensionInput">ScalableDimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfigurationInput">StepScalingPolicyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfigurationInput">TargetTrackingScalingPolicyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimension">ScalableDimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespace">ServiceNamespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmArns`<sup>Required</sup> <a name="AlarmArns" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.alarmArns"></a>

```go
func AlarmArns() *[]*string
```

- *Type:* *[]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `StepScalingPolicyConfiguration`<sup>Required</sup> <a name="StepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfiguration"></a>

```go
func StepScalingPolicyConfiguration() AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference">AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference</a>

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```go
func TargetTrackingScalingPolicyConfiguration() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ScalableDimensionInput`<sup>Optional</sup> <a name="ScalableDimensionInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimensionInput"></a>

```go
func ScalableDimensionInput() *string
```

- *Type:* *string

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespaceInput"></a>

```go
func ServiceNamespaceInput() *string
```

- *Type:* *string

---

##### `StepScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="StepScalingPolicyConfigurationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfigurationInput"></a>

```go
func StepScalingPolicyConfigurationInput() AppautoscalingPolicyStepScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---

##### `TargetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfigurationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfigurationInput"></a>

```go
func TargetTrackingScalingPolicyConfigurationInput() AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimension"></a>

```go
func ScalableDimension() *string
```

- *Type:* *string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespace"></a>

```go
func ServiceNamespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingPolicyConfig <a name="AppautoscalingPolicyConfig" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceId: *string,
	ScalableDimension: *string,
	ServiceNamespace: *string,
	Id: *string,
	PolicyType: *string,
	StepScalingPolicyConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration,
	TargetTrackingScalingPolicyConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.scalableDimension">ScalableDimension</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#id AppautoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.stepScalingPolicyConfiguration">StepScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | step_scaling_policy_configuration block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | target_tracking_scaling_policy_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}.

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.scalableDimension"></a>

```go
ScalableDimension *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}.

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.serviceNamespace"></a>

```go
ServiceNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#id AppautoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}.

---

##### `StepScalingPolicyConfiguration`<sup>Optional</sup> <a name="StepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.stepScalingPolicyConfiguration"></a>

```go
StepScalingPolicyConfiguration AppautoscalingPolicyStepScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

step_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.targetTrackingScalingPolicyConfiguration"></a>

```go
TargetTrackingScalingPolicyConfiguration AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

target_tracking_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}

---

### AppautoscalingPolicyStepScalingPolicyConfiguration <a name="AppautoscalingPolicyStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyStepScalingPolicyConfiguration {
	AdjustmentType: *string,
	Cooldown: *f64,
	MetricAggregationType: *string,
	MinAdjustmentMagnitude: *f64,
	StepAdjustment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.adjustmentType">AdjustmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.cooldown">Cooldown</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.metricAggregationType">MetricAggregationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.minAdjustmentMagnitude">MinAdjustmentMagnitude</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.stepAdjustment">StepAdjustment</a></code> | <code>interface{}</code> | step_adjustment block. |

---

##### `AdjustmentType`<sup>Optional</sup> <a name="AdjustmentType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.adjustmentType"></a>

```go
AdjustmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}.

---

##### `Cooldown`<sup>Optional</sup> <a name="Cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.cooldown"></a>

```go
Cooldown *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}.

---

##### `MetricAggregationType`<sup>Optional</sup> <a name="MetricAggregationType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.metricAggregationType"></a>

```go
MetricAggregationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}.

---

##### `MinAdjustmentMagnitude`<sup>Optional</sup> <a name="MinAdjustmentMagnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.minAdjustmentMagnitude"></a>

```go
MinAdjustmentMagnitude *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}.

---

##### `StepAdjustment`<sup>Optional</sup> <a name="StepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.stepAdjustment"></a>

```go
StepAdjustment interface{}
```

- *Type:* interface{}

step_adjustment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#step_adjustment AppautoscalingPolicy#step_adjustment}

---

### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
	ScalingAdjustment: *f64,
	MetricIntervalLowerBound: *string,
	MetricIntervalUpperBound: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalLowerBound">MetricIntervalLowerBound</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalUpperBound">MetricIntervalUpperBound</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}. |

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.scalingAdjustment"></a>

```go
ScalingAdjustment *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}.

---

##### `MetricIntervalLowerBound`<sup>Optional</sup> <a name="MetricIntervalLowerBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalLowerBound"></a>

```go
MetricIntervalLowerBound *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}.

---

##### `MetricIntervalUpperBound`<sup>Optional</sup> <a name="MetricIntervalUpperBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalUpperBound"></a>

```go
MetricIntervalUpperBound *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
	TargetValue: *f64,
	CustomizedMetricSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification,
	DisableScaleIn: interface{},
	PredefinedMetricSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification,
	ScaleInCooldown: *f64,
	ScaleOutCooldown: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">TargetValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification">CustomizedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | customized_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">DisableScaleIn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification">PredefinedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | predefined_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}. |

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```go
TargetValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}.

---

##### `CustomizedMetricSpecification`<sup>Optional</sup> <a name="CustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification"></a>

```go
CustomizedMetricSpecification AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

customized_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}

---

##### `DisableScaleIn`<sup>Optional</sup> <a name="DisableScaleIn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```go
DisableScaleIn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}.

---

##### `PredefinedMetricSpecification`<sup>Optional</sup> <a name="PredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification"></a>

```go
PredefinedMetricSpecification AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

predefined_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}

---

##### `ScaleInCooldown`<sup>Optional</sup> <a name="ScaleInCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```go
ScaleInCooldown *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}.

---

##### `ScaleOutCooldown`<sup>Optional</sup> <a name="ScaleOutCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```go
ScaleOutCooldown *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
	MetricName: *string,
	Namespace: *string,
	Statistic: *string,
	Dimensions: interface{},
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.statistic">Statistic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | dimensions block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#unit AppautoscalingPolicy#unit}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}.

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

dimensions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#unit AppautoscalingPolicy#unit}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#value AppautoscalingPolicy#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#value AppautoscalingPolicy#value}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

&appautoscalingpolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
	PredefinedMetricType: *string,
	ResourceLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.resourceLabel">ResourceLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}. |

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.predefinedMetricType"></a>

```go
PredefinedMetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}.

---

##### `ResourceLabel`<sup>Optional</sup> <a name="ResourceLabel" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.resourceLabel"></a>

```go
ResourceLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference <a name="AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyStepScalingPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment">PutStepAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetAdjustmentType">ResetAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetCooldown">ResetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMetricAggregationType">ResetMetricAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMinAdjustmentMagnitude">ResetMinAdjustmentMagnitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetStepAdjustment">ResetStepAdjustment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStepAdjustment` <a name="PutStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment"></a>

```go
func PutStepAdjustment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdjustmentType` <a name="ResetAdjustmentType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetAdjustmentType"></a>

```go
func ResetAdjustmentType()
```

##### `ResetCooldown` <a name="ResetCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetCooldown"></a>

```go
func ResetCooldown()
```

##### `ResetMetricAggregationType` <a name="ResetMetricAggregationType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMetricAggregationType"></a>

```go
func ResetMetricAggregationType()
```

##### `ResetMinAdjustmentMagnitude` <a name="ResetMinAdjustmentMagnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMinAdjustmentMagnitude"></a>

```go
func ResetMinAdjustmentMagnitude()
```

##### `ResetStepAdjustment` <a name="ResetStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetStepAdjustment"></a>

```go
func ResetStepAdjustment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustment">StepAdjustment</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentTypeInput">AdjustmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationTypeInput">MetricAggregationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitudeInput">MinAdjustmentMagnitudeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustmentInput">StepAdjustmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentType">AdjustmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldown">Cooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationType">MetricAggregationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitude">MinAdjustmentMagnitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StepAdjustment`<sup>Required</sup> <a name="StepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustment"></a>

```go
func StepAdjustment() AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList</a>

---

##### `AdjustmentTypeInput`<sup>Optional</sup> <a name="AdjustmentTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentTypeInput"></a>

```go
func AdjustmentTypeInput() *string
```

- *Type:* *string

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldownInput"></a>

```go
func CooldownInput() *f64
```

- *Type:* *f64

---

##### `MetricAggregationTypeInput`<sup>Optional</sup> <a name="MetricAggregationTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationTypeInput"></a>

```go
func MetricAggregationTypeInput() *string
```

- *Type:* *string

---

##### `MinAdjustmentMagnitudeInput`<sup>Optional</sup> <a name="MinAdjustmentMagnitudeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitudeInput"></a>

```go
func MinAdjustmentMagnitudeInput() *f64
```

- *Type:* *f64

---

##### `StepAdjustmentInput`<sup>Optional</sup> <a name="StepAdjustmentInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustmentInput"></a>

```go
func StepAdjustmentInput() interface{}
```

- *Type:* interface{}

---

##### `AdjustmentType`<sup>Required</sup> <a name="AdjustmentType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentType"></a>

```go
func AdjustmentType() *string
```

- *Type:* *string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldown"></a>

```go
func Cooldown() *f64
```

- *Type:* *f64

---

##### `MetricAggregationType`<sup>Required</sup> <a name="MetricAggregationType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationType"></a>

```go
func MetricAggregationType() *string
```

- *Type:* *string

---

##### `MinAdjustmentMagnitude`<sup>Required</sup> <a name="MinAdjustmentMagnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitude"></a>

```go
func MinAdjustmentMagnitude() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppautoscalingPolicyStepScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---


### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get"></a>

```go
func Get(index *f64) AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalLowerBound">ResetMetricIntervalLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalUpperBound">ResetMetricIntervalUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricIntervalLowerBound` <a name="ResetMetricIntervalLowerBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalLowerBound"></a>

```go
func ResetMetricIntervalLowerBound()
```

##### `ResetMetricIntervalUpperBound` <a name="ResetMetricIntervalUpperBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalUpperBound"></a>

```go
func ResetMetricIntervalUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput">MetricIntervalLowerBoundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput">MetricIntervalUpperBoundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustmentInput">ScalingAdjustmentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBound">MetricIntervalLowerBound</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBound">MetricIntervalUpperBound</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricIntervalLowerBoundInput`<sup>Optional</sup> <a name="MetricIntervalLowerBoundInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput"></a>

```go
func MetricIntervalLowerBoundInput() *string
```

- *Type:* *string

---

##### `MetricIntervalUpperBoundInput`<sup>Optional</sup> <a name="MetricIntervalUpperBoundInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput"></a>

```go
func MetricIntervalUpperBoundInput() *string
```

- *Type:* *string

---

##### `ScalingAdjustmentInput`<sup>Optional</sup> <a name="ScalingAdjustmentInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustmentInput"></a>

```go
func ScalingAdjustmentInput() *f64
```

- *Type:* *f64

---

##### `MetricIntervalLowerBound`<sup>Required</sup> <a name="MetricIntervalLowerBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBound"></a>

```go
func MetricIntervalLowerBound() *string
```

- *Type:* *string

---

##### `MetricIntervalUpperBound`<sup>Required</sup> <a name="MetricIntervalUpperBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBound"></a>

```go
func MetricIntervalUpperBound() *string
```

- *Type:* *string

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustment"></a>

```go
func ScalingAdjustment() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get"></a>

```go
func Get(index *f64) AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions"></a>

```go
func Dimensions() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification">PutCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification">PutPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetCustomizedMetricSpecification">ResetCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">ResetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetPredefinedMetricSpecification">ResetPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">ResetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">ResetScaleOutCooldown</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomizedMetricSpecification` <a name="PutCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification"></a>

```go
func PutCustomizedMetricSpecification(value AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---

##### `PutPredefinedMetricSpecification` <a name="PutPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification"></a>

```go
func PutPredefinedMetricSpecification(value AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---

##### `ResetCustomizedMetricSpecification` <a name="ResetCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetCustomizedMetricSpecification"></a>

```go
func ResetCustomizedMetricSpecification()
```

##### `ResetDisableScaleIn` <a name="ResetDisableScaleIn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```go
func ResetDisableScaleIn()
```

##### `ResetPredefinedMetricSpecification` <a name="ResetPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetPredefinedMetricSpecification"></a>

```go
func ResetPredefinedMetricSpecification()
```

##### `ResetScaleInCooldown` <a name="ResetScaleInCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```go
func ResetScaleInCooldown()
```

##### `ResetScaleOutCooldown` <a name="ResetScaleOutCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```go
func ResetScaleOutCooldown()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecification">CustomizedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecification">PredefinedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecificationInput">CustomizedMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">DisableScaleInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecificationInput">PredefinedMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">ScaleInCooldownInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">ScaleOutCooldownInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomizedMetricSpecification`<sup>Required</sup> <a name="CustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecification"></a>

```go
func CustomizedMetricSpecification() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference</a>

---

##### `PredefinedMetricSpecification`<sup>Required</sup> <a name="PredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecification"></a>

```go
func PredefinedMetricSpecification() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference</a>

---

##### `CustomizedMetricSpecificationInput`<sup>Optional</sup> <a name="CustomizedMetricSpecificationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecificationInput"></a>

```go
func CustomizedMetricSpecificationInput() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---

##### `DisableScaleInInput`<sup>Optional</sup> <a name="DisableScaleInInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```go
func DisableScaleInInput() interface{}
```

- *Type:* interface{}

---

##### `PredefinedMetricSpecificationInput`<sup>Optional</sup> <a name="PredefinedMetricSpecificationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecificationInput"></a>

```go
func PredefinedMetricSpecificationInput() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---

##### `ScaleInCooldownInput`<sup>Optional</sup> <a name="ScaleInCooldownInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```go
func ScaleInCooldownInput() *f64
```

- *Type:* *f64

---

##### `ScaleOutCooldownInput`<sup>Optional</sup> <a name="ScaleOutCooldownInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```go
func ScaleOutCooldownInput() *f64
```

- *Type:* *f64

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```go
func TargetValueInput() *f64
```

- *Type:* *f64

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```go
func DisableScaleIn() interface{}
```

- *Type:* interface{}

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```go
func ScaleInCooldown() *f64
```

- *Type:* *f64

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```go
func ScaleOutCooldown() *f64
```

- *Type:* *f64

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appautoscalingpolicy"

appautoscalingpolicy.NewAppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel">ResetResourceLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceLabel` <a name="ResetResourceLabel" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel"></a>

```go
func ResetResourceLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput">PredefinedMetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput">ResourceLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedMetricTypeInput`<sup>Optional</sup> <a name="PredefinedMetricTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```go
func PredefinedMetricTypeInput() *string
```

- *Type:* *string

---

##### `ResourceLabelInput`<sup>Optional</sup> <a name="ResourceLabelInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```go
func ResourceLabelInput() *string
```

- *Type:* *string

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```go
func PredefinedMetricType() *string
```

- *Type:* *string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel"></a>

```go
func ResourceLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---



