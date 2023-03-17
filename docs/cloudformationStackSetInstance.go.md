# `cloudformationStackSetInstance` Submodule <a name="`cloudformationStackSetInstance` Submodule" id="@cdktf/provider-aws.cloudformationStackSetInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSetInstance <a name="CloudformationStackSetInstance" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.NewCloudformationStackSetInstance(scope Construct, id *string, config CloudformationStackSetInstanceConfig) CloudformationStackSetInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig">CloudformationStackSetInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig">CloudformationStackSetInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets">PutDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putOperationPreferences">PutOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetCallAs">ResetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetDeploymentTargets">ResetDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOperationPreferences">ResetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRetainStack">ResetRetainStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDeploymentTargets` <a name="PutDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets"></a>

```go
func PutDeploymentTargets(value CloudformationStackSetInstanceDeploymentTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---

##### `PutOperationPreferences` <a name="PutOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putOperationPreferences"></a>

```go
func PutOperationPreferences(value CloudformationStackSetInstanceOperationPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts"></a>

```go
func PutTimeouts(value CloudformationStackSetInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetCallAs` <a name="ResetCallAs" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetCallAs"></a>

```go
func ResetCallAs()
```

##### `ResetDeploymentTargets` <a name="ResetDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetDeploymentTargets"></a>

```go
func ResetDeploymentTargets()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetOperationPreferences` <a name="ResetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOperationPreferences"></a>

```go
func ResetOperationPreferences()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRetainStack` <a name="ResetRetainStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRetainStack"></a>

```go
func ResetRetainStack()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.CloudformationStackSetInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.CloudformationStackSetInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.CloudformationStackSetInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargets">DeploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference">CloudformationStackSetInstanceDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference">CloudformationStackSetInstanceOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.organizationalUnitId">OrganizationalUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference">CloudformationStackSetInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAsInput">CallAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargetsInput">DeploymentTargetsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferencesInput">OperationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStackInput">RetainStackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetNameInput">StackSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAs">CallAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverrides">ParameterOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStack">RetainStack</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetName">StackSetName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentTargets`<sup>Required</sup> <a name="DeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargets"></a>

```go
func DeploymentTargets() CloudformationStackSetInstanceDeploymentTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference">CloudformationStackSetInstanceDeploymentTargetsOutputReference</a>

---

##### `OperationPreferences`<sup>Required</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferences"></a>

```go
func OperationPreferences() CloudformationStackSetInstanceOperationPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference">CloudformationStackSetInstanceOperationPreferencesOutputReference</a>

---

##### `OrganizationalUnitId`<sup>Required</sup> <a name="OrganizationalUnitId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.organizationalUnitId"></a>

```go
func OrganizationalUnitId() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeouts"></a>

```go
func Timeouts() CloudformationStackSetInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference">CloudformationStackSetInstanceTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CallAsInput`<sup>Optional</sup> <a name="CallAsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAsInput"></a>

```go
func CallAsInput() *string
```

- *Type:* *string

---

##### `DeploymentTargetsInput`<sup>Optional</sup> <a name="DeploymentTargetsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargetsInput"></a>

```go
func DeploymentTargetsInput() CloudformationStackSetInstanceDeploymentTargets
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperationPreferencesInput`<sup>Optional</sup> <a name="OperationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferencesInput"></a>

```go
func OperationPreferencesInput() CloudformationStackSetInstanceOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RetainStackInput`<sup>Optional</sup> <a name="RetainStackInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStackInput"></a>

```go
func RetainStackInput() interface{}
```

- *Type:* interface{}

---

##### `StackSetNameInput`<sup>Optional</sup> <a name="StackSetNameInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetNameInput"></a>

```go
func StackSetNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CallAs`<sup>Required</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAs"></a>

```go
func CallAs() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverrides"></a>

```go
func ParameterOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RetainStack`<sup>Required</sup> <a name="RetainStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStack"></a>

```go
func RetainStack() interface{}
```

- *Type:* interface{}

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetName"></a>

```go
func StackSetName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetInstanceConfig <a name="CloudformationStackSetInstanceConfig" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

&cloudformationstacksetinstance.CloudformationStackSetInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackSetName: *string,
	AccountId: *string,
	CallAs: *string,
	DeploymentTargets: github.com/cdktf/cdktf-provider-aws-go/aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets,
	Id: *string,
	OperationPreferences: github.com/cdktf/cdktf-provider-aws-go/aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences,
	ParameterOverrides: *map[string]*string,
	Region: *string,
	RetainStack: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.stackSetName">StackSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.callAs">CallAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#call_as CloudformationStackSetInstance#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.deploymentTargets">DeploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | deployment_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.parameterOverrides">ParameterOverrides</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.retainStack">RetainStack</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.stackSetName"></a>

```go
StackSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}.

---

##### `CallAs`<sup>Optional</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.callAs"></a>

```go
CallAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#call_as CloudformationStackSetInstance#call_as}.

---

##### `DeploymentTargets`<sup>Optional</sup> <a name="DeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.deploymentTargets"></a>

```go
DeploymentTargets CloudformationStackSetInstanceDeploymentTargets
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

deployment_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#deployment_targets CloudformationStackSetInstance#deployment_targets}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationPreferences`<sup>Optional</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.operationPreferences"></a>

```go
OperationPreferences CloudformationStackSetInstanceOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#operation_preferences CloudformationStackSetInstance#operation_preferences}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.parameterOverrides"></a>

```go
ParameterOverrides *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}.

---

##### `RetainStack`<sup>Optional</sup> <a name="RetainStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.retainStack"></a>

```go
RetainStack interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.timeouts"></a>

```go
Timeouts CloudformationStackSetInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#timeouts CloudformationStackSetInstance#timeouts}

---

### CloudformationStackSetInstanceDeploymentTargets <a name="CloudformationStackSetInstanceDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

&cloudformationstacksetinstance.CloudformationStackSetInstanceDeploymentTargets {
	OrganizationalUnitIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}. |

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.property.organizationalUnitIds"></a>

```go
OrganizationalUnitIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}.

---

### CloudformationStackSetInstanceOperationPreferences <a name="CloudformationStackSetInstanceOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

&cloudformationstacksetinstance.CloudformationStackSetInstanceOperationPreferences {
	FailureToleranceCount: *f64,
	FailureTolerancePercentage: *f64,
	MaxConcurrentCount: *f64,
	MaxConcurrentPercentage: *f64,
	RegionConcurrencyType: *string,
	RegionOrder: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_count CloudformationStackSetInstance#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_percentage CloudformationStackSetInstance#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_count CloudformationStackSetInstance#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_percentage CloudformationStackSetInstance#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_concurrency_type CloudformationStackSetInstance#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionOrder">RegionOrder</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_order CloudformationStackSetInstance#region_order}. |

---

##### `FailureToleranceCount`<sup>Optional</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureToleranceCount"></a>

```go
FailureToleranceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_count CloudformationStackSetInstance#failure_tolerance_count}.

---

##### `FailureTolerancePercentage`<sup>Optional</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureTolerancePercentage"></a>

```go
FailureTolerancePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_percentage CloudformationStackSetInstance#failure_tolerance_percentage}.

---

##### `MaxConcurrentCount`<sup>Optional</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentCount"></a>

```go
MaxConcurrentCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_count CloudformationStackSetInstance#max_concurrent_count}.

---

##### `MaxConcurrentPercentage`<sup>Optional</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentPercentage"></a>

```go
MaxConcurrentPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_percentage CloudformationStackSetInstance#max_concurrent_percentage}.

---

##### `RegionConcurrencyType`<sup>Optional</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionConcurrencyType"></a>

```go
RegionConcurrencyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_concurrency_type CloudformationStackSetInstance#region_concurrency_type}.

---

##### `RegionOrder`<sup>Optional</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionOrder"></a>

```go
RegionOrder *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_order CloudformationStackSetInstance#region_order}.

---

### CloudformationStackSetInstanceTimeouts <a name="CloudformationStackSetInstanceTimeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

&cloudformationstacksetinstance.CloudformationStackSetInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetInstanceDeploymentTargetsOutputReference <a name="CloudformationStackSetInstanceDeploymentTargetsOutputReference" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.NewCloudformationStackSetInstanceDeploymentTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackSetInstanceDeploymentTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```go
func ResetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```go
func OrganizationalUnitIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```go
func OrganizationalUnitIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackSetInstanceDeploymentTargets
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---


### CloudformationStackSetInstanceOperationPreferencesOutputReference <a name="CloudformationStackSetInstanceOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.NewCloudformationStackSetInstanceOperationPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackSetInstanceOperationPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureToleranceCount">ResetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureTolerancePercentage">ResetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentCount">ResetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentPercentage">ResetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionConcurrencyType">ResetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionOrder">ResetRegionOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureToleranceCount` <a name="ResetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```go
func ResetFailureToleranceCount()
```

##### `ResetFailureTolerancePercentage` <a name="ResetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```go
func ResetFailureTolerancePercentage()
```

##### `ResetMaxConcurrentCount` <a name="ResetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```go
func ResetMaxConcurrentCount()
```

##### `ResetMaxConcurrentPercentage` <a name="ResetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```go
func ResetMaxConcurrentPercentage()
```

##### `ResetRegionConcurrencyType` <a name="ResetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```go
func ResetRegionConcurrencyType()
```

##### `ResetRegionOrder` <a name="ResetRegionOrder" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionOrder"></a>

```go
func ResetRegionOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCountInput">FailureToleranceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentageInput">FailureTolerancePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCountInput">MaxConcurrentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">MaxConcurrentPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">RegionConcurrencyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrderInput">RegionOrderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrder">RegionOrder</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureToleranceCountInput`<sup>Optional</sup> <a name="FailureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```go
func FailureToleranceCountInput() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentageInput`<sup>Optional</sup> <a name="FailureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```go
func FailureTolerancePercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentCountInput`<sup>Optional</sup> <a name="MaxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```go
func MaxConcurrentCountInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentPercentageInput`<sup>Optional</sup> <a name="MaxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```go
func MaxConcurrentPercentageInput() *f64
```

- *Type:* *f64

---

##### `RegionConcurrencyTypeInput`<sup>Optional</sup> <a name="RegionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```go
func RegionConcurrencyTypeInput() *string
```

- *Type:* *string

---

##### `RegionOrderInput`<sup>Optional</sup> <a name="RegionOrderInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrderInput"></a>

```go
func RegionOrderInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailureToleranceCount`<sup>Required</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```go
func FailureToleranceCount() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentage`<sup>Required</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```go
func FailureTolerancePercentage() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentCount`<sup>Required</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```go
func MaxConcurrentCount() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentPercentage`<sup>Required</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```go
func MaxConcurrentPercentage() *f64
```

- *Type:* *f64

---

##### `RegionConcurrencyType`<sup>Required</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```go
func RegionConcurrencyType() *string
```

- *Type:* *string

---

##### `RegionOrder`<sup>Required</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrder"></a>

```go
func RegionOrder() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackSetInstanceOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

---


### CloudformationStackSetInstanceTimeoutsOutputReference <a name="CloudformationStackSetInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstacksetinstance"

cloudformationstacksetinstance.NewCloudformationStackSetInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackSetInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



