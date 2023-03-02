# `configRemediationConfiguration` Submodule <a name="`configRemediationConfiguration` Submodule" id="@cdktf/provider-aws.configRemediationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigRemediationConfiguration <a name="ConfigRemediationConfiguration" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration aws_config_remediation_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.NewConfigRemediationConfiguration(scope Construct, id *string, config ConfigRemediationConfigurationConfig) ConfigRemediationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls">PutExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls">ResetExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts">ResetMaximumAutomaticAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds">ResetRetryAttemptSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion">ResetTargetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExecutionControls` <a name="PutExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls"></a>

```go
func PutExecutionControls(value ConfigRemediationConfigurationExecutionControls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic"></a>

```go
func ResetAutomatic()
```

##### `ResetExecutionControls` <a name="ResetExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls"></a>

```go
func ResetExecutionControls()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetMaximumAutomaticAttempts` <a name="ResetMaximumAutomaticAttempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts"></a>

```go
func ResetMaximumAutomaticAttempts()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetRetryAttemptSeconds` <a name="ResetRetryAttemptSeconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds"></a>

```go
func ResetRetryAttemptSeconds()
```

##### `ResetTargetVersion` <a name="ResetTargetVersion" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion"></a>

```go
func ResetTargetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.ConfigRemediationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.ConfigRemediationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.ConfigRemediationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls">ExecutionControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput">AutomaticInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput">ConfigRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput">ExecutionControlsInput</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput">MaximumAutomaticAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput">RetryAttemptSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput">TargetVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic">Automatic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName">ConfigRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts">MaximumAutomaticAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds">RetryAttemptSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ExecutionControls`<sup>Required</sup> <a name="ExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls"></a>

```go
func ExecutionControls() ConfigRemediationConfigurationExecutionControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter"></a>

```go
func Parameter() ConfigRemediationConfigurationParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput"></a>

```go
func AutomaticInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigRuleNameInput`<sup>Optional</sup> <a name="ConfigRuleNameInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput"></a>

```go
func ConfigRuleNameInput() *string
```

- *Type:* *string

---

##### `ExecutionControlsInput`<sup>Optional</sup> <a name="ExecutionControlsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput"></a>

```go
func ExecutionControlsInput() ConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaximumAutomaticAttemptsInput`<sup>Optional</sup> <a name="MaximumAutomaticAttemptsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput"></a>

```go
func MaximumAutomaticAttemptsInput() *f64
```

- *Type:* *f64

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `RetryAttemptSecondsInput`<sup>Optional</sup> <a name="RetryAttemptSecondsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput"></a>

```go
func RetryAttemptSecondsInput() *f64
```

- *Type:* *f64

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `TargetVersionInput`<sup>Optional</sup> <a name="TargetVersionInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput"></a>

```go
func TargetVersionInput() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic"></a>

```go
func Automatic() interface{}
```

- *Type:* interface{}

---

##### `ConfigRuleName`<sup>Required</sup> <a name="ConfigRuleName" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName"></a>

```go
func ConfigRuleName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaximumAutomaticAttempts`<sup>Required</sup> <a name="MaximumAutomaticAttempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts"></a>

```go
func MaximumAutomaticAttempts() *f64
```

- *Type:* *f64

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `RetryAttemptSeconds`<sup>Required</sup> <a name="RetryAttemptSeconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds"></a>

```go
func RetryAttemptSeconds() *f64
```

- *Type:* *f64

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigRemediationConfigurationConfig <a name="ConfigRemediationConfigurationConfig" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

&configremediationconfiguration.ConfigRemediationConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigRuleName: *string,
	TargetId: *string,
	TargetType: *string,
	Automatic: interface{},
	ExecutionControls: github.com/cdktf/cdktf-provider-aws-go/aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls,
	Id: *string,
	MaximumAutomaticAttempts: *f64,
	Parameter: interface{},
	ResourceType: *string,
	RetryAttemptSeconds: *f64,
	TargetVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName">ConfigRuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType">TargetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic">Automatic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls">ExecutionControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | execution_controls block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts">MaximumAutomaticAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds">RetryAttemptSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigRuleName`<sup>Required</sup> <a name="ConfigRuleName" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName"></a>

```go
ConfigRuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}.

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}.

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}.

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic"></a>

```go
Automatic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}.

---

##### `ExecutionControls`<sup>Optional</sup> <a name="ExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls"></a>

```go
ExecutionControls ConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

execution_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaximumAutomaticAttempts`<sup>Optional</sup> <a name="MaximumAutomaticAttempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts"></a>

```go
MaximumAutomaticAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}.

---

##### `RetryAttemptSeconds`<sup>Optional</sup> <a name="RetryAttemptSeconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds"></a>

```go
RetryAttemptSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}.

---

##### `TargetVersion`<sup>Optional</sup> <a name="TargetVersion" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion"></a>

```go
TargetVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}.

---

### ConfigRemediationConfigurationExecutionControls <a name="ConfigRemediationConfigurationExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

&configremediationconfiguration.ConfigRemediationConfigurationExecutionControls {
	SsmControls: github.com/cdktf/cdktf-provider-aws-go/aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls">SsmControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | ssm_controls block. |

---

##### `SsmControls`<sup>Optional</sup> <a name="SsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls"></a>

```go
SsmControls ConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

ssm_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}

---

### ConfigRemediationConfigurationExecutionControlsSsmControls <a name="ConfigRemediationConfigurationExecutionControlsSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

&configremediationconfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls {
	ConcurrentExecutionRatePercentage: *f64,
	ErrorPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage">ConcurrentExecutionRatePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage">ErrorPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}. |

---

##### `ConcurrentExecutionRatePercentage`<sup>Optional</sup> <a name="ConcurrentExecutionRatePercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage"></a>

```go
ConcurrentExecutionRatePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}.

---

##### `ErrorPercentage`<sup>Optional</sup> <a name="ErrorPercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage"></a>

```go
ErrorPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}.

---

### ConfigRemediationConfigurationParameter <a name="ConfigRemediationConfigurationParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

&configremediationconfiguration.ConfigRemediationConfigurationParameter {
	Name: *string,
	ResourceValue: *string,
	StaticValue: *string,
	StaticValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue">ResourceValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue">StaticValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValues">StaticValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}.

---

##### `ResourceValue`<sup>Optional</sup> <a name="ResourceValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue"></a>

```go
ResourceValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}.

---

##### `StaticValue`<sup>Optional</sup> <a name="StaticValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue"></a>

```go
StaticValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}.

---

##### `StaticValues`<sup>Optional</sup> <a name="StaticValues" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValues"></a>

```go
StaticValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigRemediationConfigurationExecutionControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.NewConfigRemediationConfigurationExecutionControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigRemediationConfigurationExecutionControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls">PutSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls">ResetSsmControls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsmControls` <a name="PutSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls"></a>

```go
func PutSsmControls(value ConfigRemediationConfigurationExecutionControlsSsmControls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `ResetSsmControls` <a name="ResetSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls"></a>

```go
func ResetSsmControls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls">SsmControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput">SsmControlsInput</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SsmControls`<sup>Required</sup> <a name="SsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls"></a>

```go
func SsmControls() ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a>

---

##### `SsmControlsInput`<sup>Optional</sup> <a name="SsmControlsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput"></a>

```go
func SsmControlsInput() ConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---


### ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.NewConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage">ResetConcurrentExecutionRatePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage">ResetErrorPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConcurrentExecutionRatePercentage` <a name="ResetConcurrentExecutionRatePercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage"></a>

```go
func ResetConcurrentExecutionRatePercentage()
```

##### `ResetErrorPercentage` <a name="ResetErrorPercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage"></a>

```go
func ResetErrorPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput">ConcurrentExecutionRatePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput">ErrorPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage">ConcurrentExecutionRatePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage">ErrorPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConcurrentExecutionRatePercentageInput`<sup>Optional</sup> <a name="ConcurrentExecutionRatePercentageInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput"></a>

```go
func ConcurrentExecutionRatePercentageInput() *f64
```

- *Type:* *f64

---

##### `ErrorPercentageInput`<sup>Optional</sup> <a name="ErrorPercentageInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput"></a>

```go
func ErrorPercentageInput() *f64
```

- *Type:* *f64

---

##### `ConcurrentExecutionRatePercentage`<sup>Required</sup> <a name="ConcurrentExecutionRatePercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage"></a>

```go
func ConcurrentExecutionRatePercentage() *f64
```

- *Type:* *f64

---

##### `ErrorPercentage`<sup>Required</sup> <a name="ErrorPercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage"></a>

```go
func ErrorPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---


### ConfigRemediationConfigurationParameterList <a name="ConfigRemediationConfigurationParameterList" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.NewConfigRemediationConfigurationParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigRemediationConfigurationParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get"></a>

```go
func Get(index *f64) ConfigRemediationConfigurationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigRemediationConfigurationParameterOutputReference <a name="ConfigRemediationConfigurationParameterOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configremediationconfiguration"

configremediationconfiguration.NewConfigRemediationConfigurationParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigRemediationConfigurationParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue">ResetResourceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue">ResetStaticValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValues">ResetStaticValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceValue` <a name="ResetResourceValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue"></a>

```go
func ResetResourceValue()
```

##### `ResetStaticValue` <a name="ResetStaticValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue"></a>

```go
func ResetStaticValue()
```

##### `ResetStaticValues` <a name="ResetStaticValues" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValues"></a>

```go
func ResetStaticValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput">ResourceValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput">StaticValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValuesInput">StaticValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue">ResourceValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue">StaticValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValues">StaticValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceValueInput`<sup>Optional</sup> <a name="ResourceValueInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput"></a>

```go
func ResourceValueInput() *string
```

- *Type:* *string

---

##### `StaticValueInput`<sup>Optional</sup> <a name="StaticValueInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput"></a>

```go
func StaticValueInput() *string
```

- *Type:* *string

---

##### `StaticValuesInput`<sup>Optional</sup> <a name="StaticValuesInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValuesInput"></a>

```go
func StaticValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceValue`<sup>Required</sup> <a name="ResourceValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue"></a>

```go
func ResourceValue() *string
```

- *Type:* *string

---

##### `StaticValue`<sup>Required</sup> <a name="StaticValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue"></a>

```go
func StaticValue() *string
```

- *Type:* *string

---

##### `StaticValues`<sup>Required</sup> <a name="StaticValues" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValues"></a>

```go
func StaticValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



