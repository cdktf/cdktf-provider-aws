# `mwaaEnvironment` Submodule <a name="`mwaaEnvironment` Submodule" id="@cdktf/provider-aws.mwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaEnvironment <a name="MwaaEnvironment" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment aws_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironment(scope Construct, id *string, config MwaaEnvironmentConfig) MwaaEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig">MwaaEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig">MwaaEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions">ResetAirflowConfigurationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion">ResetAirflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass">ResetEnvironmentClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion">ResetPluginsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path">ResetPluginsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion">ResetRequirementsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path">ResetRequirementsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers">ResetSchedulers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode">ResetWebserverAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value MwaaEnvironmentLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value MwaaEnvironmentNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value MwaaEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

---

##### `ResetAirflowConfigurationOptions` <a name="ResetAirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions"></a>

```go
func ResetAirflowConfigurationOptions()
```

##### `ResetAirflowVersion` <a name="ResetAirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion"></a>

```go
func ResetAirflowVersion()
```

##### `ResetEnvironmentClass` <a name="ResetEnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass"></a>

```go
func ResetEnvironmentClass()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration"></a>

```go
func ResetLoggingConfiguration()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers"></a>

```go
func ResetMinWorkers()
```

##### `ResetPluginsS3ObjectVersion` <a name="ResetPluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion"></a>

```go
func ResetPluginsS3ObjectVersion()
```

##### `ResetPluginsS3Path` <a name="ResetPluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path"></a>

```go
func ResetPluginsS3Path()
```

##### `ResetRequirementsS3ObjectVersion` <a name="ResetRequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion"></a>

```go
func ResetRequirementsS3ObjectVersion()
```

##### `ResetRequirementsS3Path` <a name="ResetRequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path"></a>

```go
func ResetRequirementsS3Path()
```

##### `ResetSchedulers` <a name="ResetSchedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers"></a>

```go
func ResetSchedulers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWebserverAccessMode` <a name="ResetWebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode"></a>

```go
func ResetWebserverAccessMode()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart"></a>

```go
func ResetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.MwaaEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.MwaaEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.MwaaEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated">LastUpdated</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl">WebserverUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput">AirflowConfigurationOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput">AirflowVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput">DagS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput">EnvironmentClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput">MinWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput">PluginsS3ObjectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput">PluginsS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput">RequirementsS3ObjectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput">RequirementsS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput">SchedulersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput">SourceBucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput">WebserverAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion">AirflowVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path">DagS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass">EnvironmentClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path">PluginsS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers">Schedulers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn">SourceBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated"></a>

```go
func LastUpdated() MwaaEnvironmentLastUpdatedList
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a>

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() MwaaEnvironmentLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration"></a>

```go
func NetworkConfiguration() MwaaEnvironmentNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts"></a>

```go
func Timeouts() MwaaEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a>

---

##### `WebserverUrl`<sup>Required</sup> <a name="WebserverUrl" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl"></a>

```go
func WebserverUrl() *string
```

- *Type:* *string

---

##### `AirflowConfigurationOptionsInput`<sup>Optional</sup> <a name="AirflowConfigurationOptionsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput"></a>

```go
func AirflowConfigurationOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AirflowVersionInput`<sup>Optional</sup> <a name="AirflowVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput"></a>

```go
func AirflowVersionInput() *string
```

- *Type:* *string

---

##### `DagS3PathInput`<sup>Optional</sup> <a name="DagS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput"></a>

```go
func DagS3PathInput() *string
```

- *Type:* *string

---

##### `EnvironmentClassInput`<sup>Optional</sup> <a name="EnvironmentClassInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput"></a>

```go
func EnvironmentClassInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() MwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput"></a>

```go
func MinWorkersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() MwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `PluginsS3ObjectVersionInput`<sup>Optional</sup> <a name="PluginsS3ObjectVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput"></a>

```go
func PluginsS3ObjectVersionInput() *string
```

- *Type:* *string

---

##### `PluginsS3PathInput`<sup>Optional</sup> <a name="PluginsS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput"></a>

```go
func PluginsS3PathInput() *string
```

- *Type:* *string

---

##### `RequirementsS3ObjectVersionInput`<sup>Optional</sup> <a name="RequirementsS3ObjectVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput"></a>

```go
func RequirementsS3ObjectVersionInput() *string
```

- *Type:* *string

---

##### `RequirementsS3PathInput`<sup>Optional</sup> <a name="RequirementsS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput"></a>

```go
func RequirementsS3PathInput() *string
```

- *Type:* *string

---

##### `SchedulersInput`<sup>Optional</sup> <a name="SchedulersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput"></a>

```go
func SchedulersInput() *f64
```

- *Type:* *f64

---

##### `SourceBucketArnInput`<sup>Optional</sup> <a name="SourceBucketArnInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput"></a>

```go
func SourceBucketArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebserverAccessModeInput`<sup>Optional</sup> <a name="WebserverAccessModeInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput"></a>

```go
func WebserverAccessModeInput() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput"></a>

```go
func WeeklyMaintenanceWindowStartInput() *string
```

- *Type:* *string

---

##### `AirflowConfigurationOptions`<sup>Required</sup> <a name="AirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions"></a>

```go
func AirflowConfigurationOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AirflowVersion`<sup>Required</sup> <a name="AirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion"></a>

```go
func AirflowVersion() *string
```

- *Type:* *string

---

##### `DagS3Path`<sup>Required</sup> <a name="DagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path"></a>

```go
func DagS3Path() *string
```

- *Type:* *string

---

##### `EnvironmentClass`<sup>Required</sup> <a name="EnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass"></a>

```go
func EnvironmentClass() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers"></a>

```go
func MinWorkers() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PluginsS3ObjectVersion`<sup>Required</sup> <a name="PluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```go
func PluginsS3ObjectVersion() *string
```

- *Type:* *string

---

##### `PluginsS3Path`<sup>Required</sup> <a name="PluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path"></a>

```go
func PluginsS3Path() *string
```

- *Type:* *string

---

##### `RequirementsS3ObjectVersion`<sup>Required</sup> <a name="RequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```go
func RequirementsS3ObjectVersion() *string
```

- *Type:* *string

---

##### `RequirementsS3Path`<sup>Required</sup> <a name="RequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path"></a>

```go
func RequirementsS3Path() *string
```

- *Type:* *string

---

##### `Schedulers`<sup>Required</sup> <a name="Schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers"></a>

```go
func Schedulers() *f64
```

- *Type:* *f64

---

##### `SourceBucketArn`<sup>Required</sup> <a name="SourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn"></a>

```go
func SourceBucketArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebserverAccessMode`<sup>Required</sup> <a name="WebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode"></a>

```go
func WebserverAccessMode() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```go
func WeeklyMaintenanceWindowStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaEnvironmentConfig <a name="MwaaEnvironmentConfig" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DagS3Path: *string,
	ExecutionRoleArn: *string,
	Name: *string,
	NetworkConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration,
	SourceBucketArn: *string,
	AirflowConfigurationOptions: *map[string]*string,
	AirflowVersion: *string,
	EnvironmentClass: *string,
	Id: *string,
	KmsKey: *string,
	LoggingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration,
	MaxWorkers: *f64,
	MinWorkers: *f64,
	PluginsS3ObjectVersion: *string,
	PluginsS3Path: *string,
	RequirementsS3ObjectVersion: *string,
	RequirementsS3Path: *string,
	Schedulers: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentTimeouts,
	WebserverAccessMode: *string,
	WeeklyMaintenanceWindowStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path">DagS3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn">SourceBucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion">AirflowVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass">EnvironmentClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path">PluginsS3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers">Schedulers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DagS3Path`<sup>Required</sup> <a name="DagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path"></a>

```go
DagS3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}.

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}.

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration MwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `SourceBucketArn`<sup>Required</sup> <a name="SourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn"></a>

```go
SourceBucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}.

---

##### `AirflowConfigurationOptions`<sup>Optional</sup> <a name="AirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions"></a>

```go
AirflowConfigurationOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.

---

##### `AirflowVersion`<sup>Optional</sup> <a name="AirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion"></a>

```go
AirflowVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}.

---

##### `EnvironmentClass`<sup>Optional</sup> <a name="EnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass"></a>

```go
EnvironmentClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}.

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration MwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers"></a>

```go
MinWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}.

---

##### `PluginsS3ObjectVersion`<sup>Optional</sup> <a name="PluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion"></a>

```go
PluginsS3ObjectVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.

---

##### `PluginsS3Path`<sup>Optional</sup> <a name="PluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path"></a>

```go
PluginsS3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}.

---

##### `RequirementsS3ObjectVersion`<sup>Optional</sup> <a name="RequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion"></a>

```go
RequirementsS3ObjectVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.

---

##### `RequirementsS3Path`<sup>Optional</sup> <a name="RequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path"></a>

```go
RequirementsS3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}.

---

##### `Schedulers`<sup>Optional</sup> <a name="Schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers"></a>

```go
Schedulers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts"></a>

```go
Timeouts MwaaEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}

---

##### `WebserverAccessMode`<sup>Optional</sup> <a name="WebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode"></a>

```go
WebserverAccessMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}.

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart"></a>

```go
WeeklyMaintenanceWindowStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.

---

### MwaaEnvironmentLastUpdated <a name="MwaaEnvironmentLastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLastUpdated {

}
```


### MwaaEnvironmentLastUpdatedError <a name="MwaaEnvironmentLastUpdatedError" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLastUpdatedError {

}
```


### MwaaEnvironmentLoggingConfiguration <a name="MwaaEnvironmentLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLoggingConfiguration {
	DagProcessingLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs,
	SchedulerLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs,
	TaskLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs,
	WebserverLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs,
	WorkerLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | dag_processing_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | scheduler_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | task_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | webserver_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | worker_logs block. |

---

##### `DagProcessingLogs`<sup>Optional</sup> <a name="DagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs"></a>

```go
DagProcessingLogs MwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

dag_processing_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}

---

##### `SchedulerLogs`<sup>Optional</sup> <a name="SchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs"></a>

```go
SchedulerLogs MwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

scheduler_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}

---

##### `TaskLogs`<sup>Optional</sup> <a name="TaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs"></a>

```go
TaskLogs MwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

task_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#task_logs MwaaEnvironment#task_logs}

---

##### `WebserverLogs`<sup>Optional</sup> <a name="WebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs"></a>

```go
WebserverLogs MwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

webserver_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}

---

##### `WorkerLogs`<sup>Optional</sup> <a name="WorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs"></a>

```go
WorkerLogs MwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

worker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}

---

### MwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
	Enabled: interface{},
	LogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs {
	Enabled: interface{},
	LogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationTaskLogs <a name="MwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLoggingConfigurationTaskLogs {
	Enabled: interface{},
	LogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWebserverLogs <a name="MwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs {
	Enabled: interface{},
	LogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWorkerLogs <a name="MwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs {
	Enabled: interface{},
	LogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentNetworkConfiguration <a name="MwaaEnvironmentNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentNetworkConfiguration {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}.

---

### MwaaEnvironmentTimeouts <a name="MwaaEnvironmentTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

&mwaaenvironment.MwaaEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwaaEnvironmentLastUpdatedErrorList <a name="MwaaEnvironmentLastUpdatedErrorList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLastUpdatedErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MwaaEnvironmentLastUpdatedErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get"></a>

```go
func Get(index *f64) MwaaEnvironmentLastUpdatedErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MwaaEnvironmentLastUpdatedErrorOutputReference <a name="MwaaEnvironmentLastUpdatedErrorOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLastUpdatedErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MwaaEnvironmentLastUpdatedErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode">ErrorCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode"></a>

```go
func ErrorCode() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLastUpdatedError
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a>

---


### MwaaEnvironmentLastUpdatedList <a name="MwaaEnvironmentLastUpdatedList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLastUpdatedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MwaaEnvironmentLastUpdatedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get"></a>

```go
func Get(index *f64) MwaaEnvironmentLastUpdatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MwaaEnvironmentLastUpdatedOutputReference <a name="MwaaEnvironmentLastUpdatedOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLastUpdatedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MwaaEnvironmentLastUpdatedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error"></a>

```go
func Error() MwaaEnvironmentLastUpdatedErrorList
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLastUpdated
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a>

---


### MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```go
func CloudWatchLogGroupArn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### MwaaEnvironmentLoggingConfigurationOutputReference <a name="MwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs">PutDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs">PutSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs">PutTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs">PutWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs">PutWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs">ResetDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs">ResetSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs">ResetTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs">ResetWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs">ResetWorkerLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDagProcessingLogs` <a name="PutDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs"></a>

```go
func PutDagProcessingLogs(value MwaaEnvironmentLoggingConfigurationDagProcessingLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `PutSchedulerLogs` <a name="PutSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs"></a>

```go
func PutSchedulerLogs(value MwaaEnvironmentLoggingConfigurationSchedulerLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `PutTaskLogs` <a name="PutTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs"></a>

```go
func PutTaskLogs(value MwaaEnvironmentLoggingConfigurationTaskLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `PutWebserverLogs` <a name="PutWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs"></a>

```go
func PutWebserverLogs(value MwaaEnvironmentLoggingConfigurationWebserverLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `PutWorkerLogs` <a name="PutWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs"></a>

```go
func PutWorkerLogs(value MwaaEnvironmentLoggingConfigurationWorkerLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `ResetDagProcessingLogs` <a name="ResetDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs"></a>

```go
func ResetDagProcessingLogs()
```

##### `ResetSchedulerLogs` <a name="ResetSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs"></a>

```go
func ResetSchedulerLogs()
```

##### `ResetTaskLogs` <a name="ResetTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs"></a>

```go
func ResetTaskLogs()
```

##### `ResetWebserverLogs` <a name="ResetWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs"></a>

```go
func ResetWebserverLogs()
```

##### `ResetWorkerLogs` <a name="ResetWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs"></a>

```go
func ResetWorkerLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput">DagProcessingLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput">SchedulerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput">TaskLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput">WebserverLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput">WorkerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DagProcessingLogs`<sup>Required</sup> <a name="DagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```go
func DagProcessingLogs() MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `SchedulerLogs`<sup>Required</sup> <a name="SchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```go
func SchedulerLogs() MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `TaskLogs`<sup>Required</sup> <a name="TaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```go
func TaskLogs() MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `WebserverLogs`<sup>Required</sup> <a name="WebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```go
func WebserverLogs() MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `WorkerLogs`<sup>Required</sup> <a name="WorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```go
func WorkerLogs() MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `DagProcessingLogsInput`<sup>Optional</sup> <a name="DagProcessingLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput"></a>

```go
func DagProcessingLogsInput() MwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `SchedulerLogsInput`<sup>Optional</sup> <a name="SchedulerLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput"></a>

```go
func SchedulerLogsInput() MwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `TaskLogsInput`<sup>Optional</sup> <a name="TaskLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput"></a>

```go
func TaskLogsInput() MwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `WebserverLogsInput`<sup>Optional</sup> <a name="WebserverLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput"></a>

```go
func WebserverLogsInput() MwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `WorkerLogsInput`<sup>Optional</sup> <a name="WorkerLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput"></a>

```go
func WorkerLogsInput() MwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---


### MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```go
func CloudWatchLogGroupArn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```go
func CloudWatchLogGroupArn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```go
func CloudWatchLogGroupArn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```go
func CloudWatchLogGroupArn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### MwaaEnvironmentNetworkConfigurationOutputReference <a name="MwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---


### MwaaEnvironmentTimeoutsOutputReference <a name="MwaaEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mwaaenvironment"

mwaaenvironment.NewMwaaEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



