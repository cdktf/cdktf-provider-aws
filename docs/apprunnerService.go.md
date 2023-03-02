# `apprunnerService` Submodule <a name="`apprunnerService` Submodule" id="@cdktf/provider-aws.apprunnerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerService <a name="ApprunnerService" id="@cdktf/provider-aws.apprunnerService.ApprunnerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service aws_apprunner_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerService(scope Construct, id *string, config ApprunnerServiceConfig) ApprunnerService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig">ApprunnerServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig">ApprunnerServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putHealthCheckConfiguration">PutHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putInstanceConfiguration">PutInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putObservabilityConfiguration">PutObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putSourceConfiguration">PutSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn">ResetAutoScalingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetHealthCheckConfiguration">ResetHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetInstanceConfiguration">ResetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetObservabilityConfiguration">ResetObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value ApprunnerServiceEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `PutHealthCheckConfiguration` <a name="PutHealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putHealthCheckConfiguration"></a>

```go
func PutHealthCheckConfiguration(value ApprunnerServiceHealthCheckConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `PutInstanceConfiguration` <a name="PutInstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putInstanceConfiguration"></a>

```go
func PutInstanceConfiguration(value ApprunnerServiceInstanceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value ApprunnerServiceNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `PutObservabilityConfiguration` <a name="PutObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putObservabilityConfiguration"></a>

```go
func PutObservabilityConfiguration(value ApprunnerServiceObservabilityConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putObservabilityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putSourceConfiguration"></a>

```go
func PutSourceConfiguration(value ApprunnerServiceSourceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `ResetAutoScalingConfigurationArn` <a name="ResetAutoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn"></a>

```go
func ResetAutoScalingConfigurationArn()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetHealthCheckConfiguration` <a name="ResetHealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetHealthCheckConfiguration"></a>

```go
func ResetHealthCheckConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceConfiguration` <a name="ResetInstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetInstanceConfiguration"></a>

```go
func ResetInstanceConfiguration()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetObservabilityConfiguration` <a name="ResetObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetObservabilityConfiguration"></a>

```go
func ResetObservabilityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.ApprunnerService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.ApprunnerService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.ApprunnerService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfiguration">HealthCheckConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfiguration">ObservabilityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceUrl">ServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput">AutoScalingConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput">HealthCheckConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfigurationInput">InstanceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfigurationInput">ObservabilityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() ApprunnerServiceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a>

---

##### `HealthCheckConfiguration`<sup>Required</sup> <a name="HealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfiguration"></a>

```go
func HealthCheckConfiguration() ApprunnerServiceHealthCheckConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a>

---

##### `InstanceConfiguration`<sup>Required</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfiguration"></a>

```go
func InstanceConfiguration() ApprunnerServiceInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfiguration"></a>

```go
func NetworkConfiguration() ApprunnerServiceNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a>

---

##### `ObservabilityConfiguration`<sup>Required</sup> <a name="ObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfiguration"></a>

```go
func ObservabilityConfiguration() ApprunnerServiceObservabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a>

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceUrl"></a>

```go
func ServiceUrl() *string
```

- *Type:* *string

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfiguration"></a>

```go
func SourceConfiguration() ApprunnerServiceSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationArnInput`<sup>Optional</sup> <a name="AutoScalingConfigurationArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput"></a>

```go
func AutoScalingConfigurationArnInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() ApprunnerServiceEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `HealthCheckConfigurationInput`<sup>Optional</sup> <a name="HealthCheckConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput"></a>

```go
func HealthCheckConfigurationInput() ApprunnerServiceHealthCheckConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceConfigurationInput`<sup>Optional</sup> <a name="InstanceConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfigurationInput"></a>

```go
func InstanceConfigurationInput() ApprunnerServiceInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() ApprunnerServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `ObservabilityConfigurationInput`<sup>Optional</sup> <a name="ObservabilityConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfigurationInput"></a>

```go
func ObservabilityConfigurationInput() ApprunnerServiceObservabilityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfigurationInput"></a>

```go
func SourceConfigurationInput() ApprunnerServiceSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoScalingConfigurationArn`<sup>Required</sup> <a name="AutoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn"></a>

```go
func AutoScalingConfigurationArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerServiceConfig <a name="ApprunnerServiceConfig" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceName: *string,
	SourceConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfiguration,
	AutoScalingConfigurationArn: *string,
	EncryptionConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceEncryptionConfiguration,
	HealthCheckConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration,
	Id: *string,
	InstanceConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceInstanceConfiguration,
	NetworkConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceNetworkConfiguration,
	ObservabilityConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceObservabilityConfiguration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | source_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration">HealthCheckConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | health_check_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration">ObservabilityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | observability_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}.

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration"></a>

```go
SourceConfiguration ApprunnerServiceSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `AutoScalingConfigurationArn`<sup>Optional</sup> <a name="AutoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn"></a>

```go
AutoScalingConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration ApprunnerServiceEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `HealthCheckConfiguration`<sup>Optional</sup> <a name="HealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration"></a>

```go
HealthCheckConfiguration ApprunnerServiceHealthCheckConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

health_check_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceConfiguration`<sup>Optional</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration"></a>

```go
InstanceConfiguration ApprunnerServiceInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration ApprunnerServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `ObservabilityConfiguration`<sup>Optional</sup> <a name="ObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration"></a>

```go
ObservabilityConfiguration ApprunnerServiceObservabilityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

observability_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}.

---

### ApprunnerServiceEncryptionConfiguration <a name="ApprunnerServiceEncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceEncryptionConfiguration {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#kms_key ApprunnerService#kms_key}. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#kms_key ApprunnerService#kms_key}.

---

### ApprunnerServiceHealthCheckConfiguration <a name="ApprunnerServiceHealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceHealthCheckConfiguration {
	HealthyThreshold: *f64,
	Interval: *f64,
	Path: *string,
	Protocol: *string,
	Timeout: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#interval ApprunnerService#interval}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#path ApprunnerService#path}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#protocol ApprunnerService#protocol}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#timeout ApprunnerService#timeout}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}. |

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#interval ApprunnerService#interval}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#path ApprunnerService#path}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#protocol ApprunnerService#protocol}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#timeout ApprunnerService#timeout}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}.

---

### ApprunnerServiceInstanceConfiguration <a name="ApprunnerServiceInstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceInstanceConfiguration {
	Cpu: *string,
	InstanceRoleArn: *string,
	Memory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#cpu ApprunnerService#cpu}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#memory ApprunnerService#memory}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#cpu ApprunnerService#cpu}.

---

##### `InstanceRoleArn`<sup>Optional</sup> <a name="InstanceRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn"></a>

```go
InstanceRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#memory ApprunnerService#memory}.

---

### ApprunnerServiceNetworkConfiguration <a name="ApprunnerServiceNetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceNetworkConfiguration {
	EgressConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration,
	IngressConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration">EgressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | egress_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration">IngressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | ingress_configuration block. |

---

##### `EgressConfiguration`<sup>Optional</sup> <a name="EgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration"></a>

```go
EgressConfiguration ApprunnerServiceNetworkConfigurationEgressConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

egress_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_configuration ApprunnerService#egress_configuration}

---

##### `IngressConfiguration`<sup>Optional</sup> <a name="IngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration"></a>

```go
IngressConfiguration ApprunnerServiceNetworkConfigurationIngressConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

ingress_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}

---

### ApprunnerServiceNetworkConfigurationEgressConfiguration <a name="ApprunnerServiceNetworkConfigurationEgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceNetworkConfigurationEgressConfiguration {
	EgressType: *string,
	VpcConnectorArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType">EgressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_type ApprunnerService#egress_type}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn">VpcConnectorArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}. |

---

##### `EgressType`<sup>Optional</sup> <a name="EgressType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType"></a>

```go
EgressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_type ApprunnerService#egress_type}.

---

##### `VpcConnectorArn`<sup>Optional</sup> <a name="VpcConnectorArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn"></a>

```go
VpcConnectorArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}.

---

### ApprunnerServiceNetworkConfigurationIngressConfiguration <a name="ApprunnerServiceNetworkConfigurationIngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceNetworkConfigurationIngressConfiguration {
	IsPubliclyAccessible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible">IsPubliclyAccessible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}. |

---

##### `IsPubliclyAccessible`<sup>Optional</sup> <a name="IsPubliclyAccessible" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible"></a>

```go
IsPubliclyAccessible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}.

---

### ApprunnerServiceObservabilityConfiguration <a name="ApprunnerServiceObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceObservabilityConfiguration {
	ObservabilityEnabled: interface{},
	ObservabilityConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled">ObservabilityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_enabled ApprunnerService#observability_enabled}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn">ObservabilityConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}. |

---

##### `ObservabilityEnabled`<sup>Required</sup> <a name="ObservabilityEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled"></a>

```go
ObservabilityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_enabled ApprunnerService#observability_enabled}.

---

##### `ObservabilityConfigurationArn`<sup>Optional</sup> <a name="ObservabilityConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```go
ObservabilityConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}.

---

### ApprunnerServiceSourceConfiguration <a name="ApprunnerServiceSourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfiguration {
	AuthenticationConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration,
	AutoDeploymentsEnabled: interface{},
	CodeRepository: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository,
	ImageRepository: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled">AutoDeploymentsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository">ImageRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | image_repository block. |

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration"></a>

```go
AuthenticationConfiguration ApprunnerServiceSourceConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}

---

##### `AutoDeploymentsEnabled`<sup>Optional</sup> <a name="AutoDeploymentsEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled"></a>

```go
AutoDeploymentsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}.

---

##### `CodeRepository`<sup>Optional</sup> <a name="CodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository"></a>

```go
CodeRepository ApprunnerServiceSourceConfigurationCodeRepository
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_repository ApprunnerService#code_repository}

---

##### `ImageRepository`<sup>Optional</sup> <a name="ImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository"></a>

```go
ImageRepository ApprunnerServiceSourceConfigurationImageRepository
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

image_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository ApprunnerService#image_repository}

---

### ApprunnerServiceSourceConfigurationAuthenticationConfiguration <a name="ApprunnerServiceSourceConfigurationAuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
	AccessRoleArn: *string,
	ConnectionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#access_role_arn ApprunnerService#access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#connection_arn ApprunnerService#connection_arn}. |

---

##### `AccessRoleArn`<sup>Optional</sup> <a name="AccessRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn"></a>

```go
AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#access_role_arn ApprunnerService#access_role_arn}.

---

##### `ConnectionArn`<sup>Optional</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn"></a>

```go
ConnectionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#connection_arn ApprunnerService#connection_arn}.

---

### ApprunnerServiceSourceConfigurationCodeRepository <a name="ApprunnerServiceSourceConfigurationCodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationCodeRepository {
	RepositoryUrl: *string,
	SourceCodeVersion: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion,
	CodeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#repository_url ApprunnerService#repository_url}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion">SourceCodeVersion</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | source_code_version block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | code_configuration block. |

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#repository_url ApprunnerService#repository_url}.

---

##### `SourceCodeVersion`<sup>Required</sup> <a name="SourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion"></a>

```go
SourceCodeVersion ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

source_code_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_code_version ApprunnerService#source_code_version}

---

##### `CodeConfiguration`<sup>Optional</sup> <a name="CodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration"></a>

```go
CodeConfiguration ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_configuration ApprunnerService#code_configuration}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
	ConfigurationSource: *string,
	CodeConfigurationValues: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource">ConfigurationSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#configuration_source ApprunnerService#configuration_source}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues">CodeConfigurationValues</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | code_configuration_values block. |

---

##### `ConfigurationSource`<sup>Required</sup> <a name="ConfigurationSource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource"></a>

```go
ConfigurationSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#configuration_source ApprunnerService#configuration_source}.

---

##### `CodeConfigurationValues`<sup>Optional</sup> <a name="CodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues"></a>

```go
CodeConfigurationValues ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

code_configuration_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
	Runtime: *string,
	BuildCommand: *string,
	Port: *string,
	RuntimeEnvironmentSecrets: *map[string]*string,
	RuntimeEnvironmentVariables: *map[string]*string,
	StartCommand: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime">Runtime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime ApprunnerService#runtime}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand">BuildCommand</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#build_command ApprunnerService#build_command}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand">StartCommand</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}. |

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime ApprunnerService#runtime}.

---

##### `BuildCommand`<sup>Optional</sup> <a name="BuildCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand"></a>

```go
BuildCommand *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#build_command ApprunnerService#build_command}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}.

---

##### `RuntimeEnvironmentSecrets`<sup>Optional</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets"></a>

```go
RuntimeEnvironmentSecrets *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}.

---

##### `RuntimeEnvironmentVariables`<sup>Optional</sup> <a name="RuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables"></a>

```go
RuntimeEnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `StartCommand`<sup>Optional</sup> <a name="StartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand"></a>

```go
StartCommand *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}.

---

### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#type ApprunnerService#type}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#value ApprunnerService#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#type ApprunnerService#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationImageRepository <a name="ApprunnerServiceSourceConfigurationImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationImageRepository {
	ImageIdentifier: *string,
	ImageRepositoryType: *string,
	ImageConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier">ImageIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_identifier ApprunnerService#image_identifier}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType">ImageRepositoryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository_type ApprunnerService#image_repository_type}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | image_configuration block. |

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier"></a>

```go
ImageIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_identifier ApprunnerService#image_identifier}.

---

##### `ImageRepositoryType`<sup>Required</sup> <a name="ImageRepositoryType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType"></a>

```go
ImageRepositoryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository_type ApprunnerService#image_repository_type}.

---

##### `ImageConfiguration`<sup>Optional</sup> <a name="ImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration"></a>

```go
ImageConfiguration ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

image_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_configuration ApprunnerService#image_configuration}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

&apprunnerservice.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
	Port: *string,
	RuntimeEnvironmentSecrets: *map[string]*string,
	RuntimeEnvironmentVariables: *map[string]*string,
	StartCommand: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand">StartCommand</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}.

---

##### `RuntimeEnvironmentSecrets`<sup>Optional</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets"></a>

```go
RuntimeEnvironmentSecrets *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}.

---

##### `RuntimeEnvironmentVariables`<sup>Optional</sup> <a name="RuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables"></a>

```go
RuntimeEnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `StartCommand`<sup>Optional</sup> <a name="StartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand"></a>

```go
StartCommand *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerServiceEncryptionConfigurationOutputReference <a name="ApprunnerServiceEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---


### ApprunnerServiceHealthCheckConfigurationOutputReference <a name="ApprunnerServiceHealthCheckConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceHealthCheckConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceHealthCheckConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceHealthCheckConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---


### ApprunnerServiceInstanceConfigurationOutputReference <a name="ApprunnerServiceInstanceConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceInstanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceInstanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn">ResetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetInstanceRoleArn` <a name="ResetInstanceRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn"></a>

```go
func ResetInstanceRoleArn()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput">InstanceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `InstanceRoleArnInput`<sup>Optional</sup> <a name="InstanceRoleArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput"></a>

```go
func InstanceRoleArnInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `InstanceRoleArn`<sup>Required</sup> <a name="InstanceRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn"></a>

```go
func InstanceRoleArn() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType">ResetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn">ResetVpcConnectorArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressType` <a name="ResetEgressType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType"></a>

```go
func ResetEgressType()
```

##### `ResetVpcConnectorArn` <a name="ResetVpcConnectorArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn"></a>

```go
func ResetVpcConnectorArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput">EgressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput">VpcConnectorArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType">EgressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn">VpcConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressTypeInput`<sup>Optional</sup> <a name="EgressTypeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput"></a>

```go
func EgressTypeInput() *string
```

- *Type:* *string

---

##### `VpcConnectorArnInput`<sup>Optional</sup> <a name="VpcConnectorArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput"></a>

```go
func VpcConnectorArnInput() *string
```

- *Type:* *string

---

##### `EgressType`<sup>Required</sup> <a name="EgressType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType"></a>

```go
func EgressType() *string
```

- *Type:* *string

---

##### `VpcConnectorArn`<sup>Required</sup> <a name="VpcConnectorArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn"></a>

```go
func VpcConnectorArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceNetworkConfigurationEgressConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible">ResetIsPubliclyAccessible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsPubliclyAccessible` <a name="ResetIsPubliclyAccessible" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible"></a>

```go
func ResetIsPubliclyAccessible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput">IsPubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible">IsPubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPubliclyAccessibleInput`<sup>Optional</sup> <a name="IsPubliclyAccessibleInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput"></a>

```go
func IsPubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsPubliclyAccessible`<sup>Required</sup> <a name="IsPubliclyAccessible" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible"></a>

```go
func IsPubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceNetworkConfigurationIngressConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration">PutEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration">PutIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration">ResetEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration">ResetIngressConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressConfiguration` <a name="PutEgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration"></a>

```go
func PutEgressConfiguration(value ApprunnerServiceNetworkConfigurationEgressConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `PutIngressConfiguration` <a name="PutIngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration"></a>

```go
func PutIngressConfiguration(value ApprunnerServiceNetworkConfigurationIngressConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `ResetEgressConfiguration` <a name="ResetEgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration"></a>

```go
func ResetEgressConfiguration()
```

##### `ResetIngressConfiguration` <a name="ResetIngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration"></a>

```go
func ResetIngressConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration">EgressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration">IngressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput">EgressConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput">IngressConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressConfiguration`<sup>Required</sup> <a name="EgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration"></a>

```go
func EgressConfiguration() ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a>

---

##### `IngressConfiguration`<sup>Required</sup> <a name="IngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration"></a>

```go
func IngressConfiguration() ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a>

---

##### `EgressConfigurationInput`<sup>Optional</sup> <a name="EgressConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput"></a>

```go
func EgressConfigurationInput() ApprunnerServiceNetworkConfigurationEgressConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `IngressConfigurationInput`<sup>Optional</sup> <a name="IngressConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput"></a>

```go
func IngressConfigurationInput() ApprunnerServiceNetworkConfigurationIngressConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---


### ApprunnerServiceObservabilityConfigurationOutputReference <a name="ApprunnerServiceObservabilityConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceObservabilityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceObservabilityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn">ResetObservabilityConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObservabilityConfigurationArn` <a name="ResetObservabilityConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn"></a>

```go
func ResetObservabilityConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput">ObservabilityConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput">ObservabilityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn">ObservabilityConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled">ObservabilityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObservabilityConfigurationArnInput`<sup>Optional</sup> <a name="ObservabilityConfigurationArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput"></a>

```go
func ObservabilityConfigurationArnInput() *string
```

- *Type:* *string

---

##### `ObservabilityEnabledInput`<sup>Optional</sup> <a name="ObservabilityEnabledInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput"></a>

```go
func ObservabilityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ObservabilityConfigurationArn`<sup>Required</sup> <a name="ObservabilityConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn"></a>

```go
func ObservabilityConfigurationArn() *string
```

- *Type:* *string

---

##### `ObservabilityEnabled`<sup>Required</sup> <a name="ObservabilityEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled"></a>

```go
func ObservabilityEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceObservabilityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---


### ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn">ResetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn">ResetConnectionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessRoleArn` <a name="ResetAccessRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn"></a>

```go
func ResetAccessRoleArn()
```

##### `ResetConnectionArn` <a name="ResetConnectionArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn"></a>

```go
func ResetConnectionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput">AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRoleArnInput`<sup>Optional</sup> <a name="AccessRoleArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput"></a>

```go
func AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput"></a>

```go
func ConnectionArnInput() *string
```

- *Type:* *string

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn"></a>

```go
func AccessRoleArn() *string
```

- *Type:* *string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn"></a>

```go
func ConnectionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand">ResetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets">ResetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables">ResetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand">ResetStartCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildCommand` <a name="ResetBuildCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand"></a>

```go
func ResetBuildCommand()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRuntimeEnvironmentSecrets` <a name="ResetRuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets"></a>

```go
func ResetRuntimeEnvironmentSecrets()
```

##### `ResetRuntimeEnvironmentVariables` <a name="ResetRuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables"></a>

```go
func ResetRuntimeEnvironmentVariables()
```

##### `ResetStartCommand` <a name="ResetStartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand"></a>

```go
func ResetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput">BuildCommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput">RuntimeEnvironmentSecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput">RuntimeEnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput">StartCommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand">BuildCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand">StartCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildCommandInput`<sup>Optional</sup> <a name="BuildCommandInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput"></a>

```go
func BuildCommandInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `RuntimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="RuntimeEnvironmentSecretsInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```go
func RuntimeEnvironmentSecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuntimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="RuntimeEnvironmentVariablesInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```go
func RuntimeEnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `StartCommandInput`<sup>Optional</sup> <a name="StartCommandInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput"></a>

```go
func StartCommandInput() *string
```

- *Type:* *string

---

##### `BuildCommand`<sup>Required</sup> <a name="BuildCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand"></a>

```go
func BuildCommand() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `RuntimeEnvironmentSecrets`<sup>Required</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets"></a>

```go
func RuntimeEnvironmentSecrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuntimeEnvironmentVariables`<sup>Required</sup> <a name="RuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables"></a>

```go
func RuntimeEnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartCommand`<sup>Required</sup> <a name="StartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand"></a>

```go
func StartCommand() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues">PutCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues">ResetCodeConfigurationValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfigurationValues` <a name="PutCodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues"></a>

```go
func PutCodeConfigurationValues(value ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `ResetCodeConfigurationValues` <a name="ResetCodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues"></a>

```go
func ResetCodeConfigurationValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues">CodeConfigurationValues</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput">CodeConfigurationValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput">ConfigurationSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource">ConfigurationSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeConfigurationValues`<sup>Required</sup> <a name="CodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues"></a>

```go
func CodeConfigurationValues() ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a>

---

##### `CodeConfigurationValuesInput`<sup>Optional</sup> <a name="CodeConfigurationValuesInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput"></a>

```go
func CodeConfigurationValuesInput() ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `ConfigurationSourceInput`<sup>Optional</sup> <a name="ConfigurationSourceInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput"></a>

```go
func ConfigurationSourceInput() *string
```

- *Type:* *string

---

##### `ConfigurationSource`<sup>Required</sup> <a name="ConfigurationSource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource"></a>

```go
func ConfigurationSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration">PutCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion">PutSourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration">ResetCodeConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfiguration` <a name="PutCodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration"></a>

```go
func PutCodeConfiguration(value ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `PutSourceCodeVersion` <a name="PutSourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion"></a>

```go
func PutSourceCodeVersion(value ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `ResetCodeConfiguration` <a name="ResetCodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration"></a>

```go
func ResetCodeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion">SourceCodeVersion</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput">CodeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput">SourceCodeVersionInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeConfiguration`<sup>Required</sup> <a name="CodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration"></a>

```go
func CodeConfiguration() ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a>

---

##### `SourceCodeVersion`<sup>Required</sup> <a name="SourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion"></a>

```go
func SourceCodeVersion() ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a>

---

##### `CodeConfigurationInput`<sup>Optional</sup> <a name="CodeConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput"></a>

```go
func CodeConfigurationInput() ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `SourceCodeVersionInput`<sup>Optional</sup> <a name="SourceCodeVersionInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput"></a>

```go
func SourceCodeVersionInput() ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationCodeRepository
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets">ResetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables">ResetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand">ResetStartCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRuntimeEnvironmentSecrets` <a name="ResetRuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets"></a>

```go
func ResetRuntimeEnvironmentSecrets()
```

##### `ResetRuntimeEnvironmentVariables` <a name="ResetRuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables"></a>

```go
func ResetRuntimeEnvironmentVariables()
```

##### `ResetStartCommand` <a name="ResetStartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand"></a>

```go
func ResetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput">RuntimeEnvironmentSecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput">RuntimeEnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput">StartCommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand">StartCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `RuntimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="RuntimeEnvironmentSecretsInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```go
func RuntimeEnvironmentSecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuntimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="RuntimeEnvironmentVariablesInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```go
func RuntimeEnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartCommandInput`<sup>Optional</sup> <a name="StartCommandInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput"></a>

```go
func StartCommandInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `RuntimeEnvironmentSecrets`<sup>Required</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets"></a>

```go
func RuntimeEnvironmentSecrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuntimeEnvironmentVariables`<sup>Required</sup> <a name="RuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables"></a>

```go
func RuntimeEnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartCommand`<sup>Required</sup> <a name="StartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand"></a>

```go
func StartCommand() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationImageRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationImageRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration">PutImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration">ResetImageConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImageConfiguration` <a name="PutImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration"></a>

```go
func PutImageConfiguration(value ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `ResetImageConfiguration` <a name="ResetImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration"></a>

```go
func ResetImageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput">ImageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput">ImageIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput">ImageRepositoryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier">ImageIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType">ImageRepositoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration"></a>

```go
func ImageConfiguration() ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a>

---

##### `ImageConfigurationInput`<sup>Optional</sup> <a name="ImageConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput"></a>

```go
func ImageConfigurationInput() ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `ImageIdentifierInput`<sup>Optional</sup> <a name="ImageIdentifierInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput"></a>

```go
func ImageIdentifierInput() *string
```

- *Type:* *string

---

##### `ImageRepositoryTypeInput`<sup>Optional</sup> <a name="ImageRepositoryTypeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput"></a>

```go
func ImageRepositoryTypeInput() *string
```

- *Type:* *string

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier"></a>

```go
func ImageIdentifier() *string
```

- *Type:* *string

---

##### `ImageRepositoryType`<sup>Required</sup> <a name="ImageRepositoryType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType"></a>

```go
func ImageRepositoryType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfigurationImageRepository
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---


### ApprunnerServiceSourceConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnerservice"

apprunnerservice.NewApprunnerServiceSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerServiceSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository">PutCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository">PutImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled">ResetAutoDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository">ResetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository">ResetImageRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration"></a>

```go
func PutAuthenticationConfiguration(value ApprunnerServiceSourceConfigurationAuthenticationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `PutCodeRepository` <a name="PutCodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository"></a>

```go
func PutCodeRepository(value ApprunnerServiceSourceConfigurationCodeRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `PutImageRepository` <a name="PutImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository"></a>

```go
func PutImageRepository(value ApprunnerServiceSourceConfigurationImageRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```go
func ResetAuthenticationConfiguration()
```

##### `ResetAutoDeploymentsEnabled` <a name="ResetAutoDeploymentsEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled"></a>

```go
func ResetAutoDeploymentsEnabled()
```

##### `ResetCodeRepository` <a name="ResetCodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository"></a>

```go
func ResetCodeRepository()
```

##### `ResetImageRepository` <a name="ResetImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository"></a>

```go
func ResetImageRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository">ImageRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput">AutoDeploymentsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput">CodeRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput">ImageRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled">AutoDeploymentsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration"></a>

```go
func AuthenticationConfiguration() ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `CodeRepository`<sup>Required</sup> <a name="CodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository"></a>

```go
func CodeRepository() ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a>

---

##### `ImageRepository`<sup>Required</sup> <a name="ImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository"></a>

```go
func ImageRepository() ApprunnerServiceSourceConfigurationImageRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a>

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```go
func AuthenticationConfigurationInput() ApprunnerServiceSourceConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `AutoDeploymentsEnabledInput`<sup>Optional</sup> <a name="AutoDeploymentsEnabledInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput"></a>

```go
func AutoDeploymentsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CodeRepositoryInput`<sup>Optional</sup> <a name="CodeRepositoryInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput"></a>

```go
func CodeRepositoryInput() ApprunnerServiceSourceConfigurationCodeRepository
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `ImageRepositoryInput`<sup>Optional</sup> <a name="ImageRepositoryInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput"></a>

```go
func ImageRepositoryInput() ApprunnerServiceSourceConfigurationImageRepository
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `AutoDeploymentsEnabled`<sup>Required</sup> <a name="AutoDeploymentsEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled"></a>

```go
func AutoDeploymentsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerServiceSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---



