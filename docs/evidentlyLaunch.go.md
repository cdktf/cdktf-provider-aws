# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktf/provider-aws.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunch(scope Construct, id *string, config EvidentlyLaunchConfig) EvidentlyLaunch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups">PutGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">PutMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">PutScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">ResetMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">ResetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig">ResetScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGroups` <a name="PutGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```go
func PutGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricMonitors` <a name="PutMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```go
func PutMetricMonitors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduledSplitsConfig` <a name="PutScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```go
func PutScheduledSplitsConfig(value EvidentlyLaunchScheduledSplitsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts"></a>

```go
func PutTimeouts(value EvidentlyLaunchTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId"></a>

```go
func ResetId()
```

##### `ResetMetricMonitors` <a name="ResetMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```go
func ResetMetricMonitors()
```

##### `ResetRandomizationSalt` <a name="ResetRandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```go
func ResetRandomizationSalt()
```

##### `ResetScheduledSplitsConfig` <a name="ResetScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig"></a>

```go
func ResetScheduledSplitsConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution">Execution</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">MetricMonitors</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">GroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">MetricMonitorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">RandomizationSaltInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">ScheduledSplitsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Execution`<sup>Required</sup> <a name="Execution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution"></a>

```go
func Execution() EvidentlyLaunchExecutionList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a>

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```go
func Groups() EvidentlyLaunchGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `MetricMonitors`<sup>Required</sup> <a name="MetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```go
func MetricMonitors() EvidentlyLaunchMetricMonitorsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `ScheduledSplitsConfig`<sup>Required</sup> <a name="ScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```go
func ScheduledSplitsConfig() EvidentlyLaunchScheduledSplitsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts"></a>

```go
func Timeouts() EvidentlyLaunchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```go
func GroupsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricMonitorsInput`<sup>Optional</sup> <a name="MetricMonitorsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```go
func MetricMonitorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RandomizationSaltInput`<sup>Optional</sup> <a name="RandomizationSaltInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```go
func RandomizationSaltInput() *string
```

- *Type:* *string

---

##### `ScheduledSplitsConfigInput`<sup>Optional</sup> <a name="ScheduledSplitsConfigInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```go
func ScheduledSplitsConfigInput() EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RandomizationSalt`<sup>Required</sup> <a name="RandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```go
func RandomizationSalt() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Groups: interface{},
	Name: *string,
	Project: *string,
	Description: *string,
	Id: *string,
	MetricMonitors: interface{},
	RandomizationSalt: *string,
	ScheduledSplitsConfig: github.com/cdktf/cdktf-provider-aws-go/aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.evidentlyLaunch.EvidentlyLaunchTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">Groups</a></code> | <code>interface{}</code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">MetricMonitors</a></code> | <code>interface{}</code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```go
Groups interface{}
```

- *Type:* interface{}

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricMonitors`<sup>Optional</sup> <a name="MetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```go
MetricMonitors interface{}
```

- *Type:* interface{}

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `RandomizationSalt`<sup>Optional</sup> <a name="RandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```go
RandomizationSalt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `ScheduledSplitsConfig`<sup>Optional</sup> <a name="ScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```go
ScheduledSplitsConfig EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts"></a>

```go
Timeouts EvidentlyLaunchTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

### EvidentlyLaunchExecution <a name="EvidentlyLaunchExecution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchExecution {

}
```


### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchGroups {
	Feature: *string,
	Name: *string,
	Variation: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">Feature</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">Variation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```go
Feature *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```go
Variation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchMetricMonitors {
	MetricDefinition: github.com/cdktf/cdktf-provider-aws-go/aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition">MetricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | metric_definition block. |

---

##### `MetricDefinition`<sup>Required</sup> <a name="MetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition"></a>

```go
MetricDefinition EvidentlyLaunchMetricMonitorsMetricDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

metric_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}

---

### EvidentlyLaunchMetricMonitorsMetricDefinition <a name="EvidentlyLaunchMetricMonitorsMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchMetricMonitorsMetricDefinition {
	EntityIdKey: *string,
	Name: *string,
	ValueKey: *string,
	EventPattern: *string,
	UnitLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey">ValueKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern">EventPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey"></a>

```go
EntityIdKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey"></a>

```go
ValueKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}.

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}.

---

##### `UnitLabel`<sup>Optional</sup> <a name="UnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel"></a>

```go
UnitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfig {
	Steps: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}

---

### EvidentlyLaunchScheduledSplitsConfigSteps <a name="EvidentlyLaunchScheduledSplitsConfigSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfigSteps {
	GroupWeights: *map[string]*f64,
	StartTime: *string,
	SegmentOverrides: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights">GroupWeights</a></code> | <code>*map[string]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides">SegmentOverrides</a></code> | <code>interface{}</code> | segment_overrides block. |

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights"></a>

```go
GroupWeights *map[string]*f64
```

- *Type:* *map[string]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `SegmentOverrides`<sup>Optional</sup> <a name="SegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides"></a>

```go
SegmentOverrides interface{}
```

- *Type:* interface{}

segment_overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}

---

### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides {
	EvaluationOrder: *f64,
	Segment: *string,
	Weights: *map[string]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder">EvaluationOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment">Segment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights">Weights</a></code> | <code>*map[string]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `EvaluationOrder`<sup>Required</sup> <a name="EvaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder"></a>

```go
EvaluationOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment"></a>

```go
Segment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights"></a>

```go
Weights *map[string]*f64
```

- *Type:* *map[string]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchTimeouts <a name="EvidentlyLaunchTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionList <a name="EvidentlyLaunchExecutionList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchExecutionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchExecutionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EvidentlyLaunchExecutionOutputReference <a name="EvidentlyLaunchExecutionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchExecutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchExecutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime">EndedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime">StartedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndedTime`<sup>Required</sup> <a name="EndedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime"></a>

```go
func EndedTime() *string
```

- *Type:* *string

---

##### `StartedTime`<sup>Required</sup> <a name="StartedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime"></a>

```go
func StartedTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue"></a>

```go
func InternalValue() EvidentlyLaunchExecution
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">FeatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">VariationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">Variation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```go
func FeatureInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```go
func VariationInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```go
func Variation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchMetricMonitorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchMetricMonitorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference <a name="EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel">ResetUnitLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern"></a>

```go
func ResetEventPattern()
```

##### `ResetUnitLabel` <a name="ResetUnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel"></a>

```go
func ResetUnitLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput">EntityIdKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput">UnitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdKeyInput`<sup>Optional</sup> <a name="EntityIdKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput"></a>

```go
func EntityIdKeyInput() *string
```

- *Type:* *string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UnitLabelInput`<sup>Optional</sup> <a name="UnitLabelInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput"></a>

```go
func UnitLabelInput() *string
```

- *Type:* *string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput"></a>

```go
func ValueKeyInput() *string
```

- *Type:* *string

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey"></a>

```go
func EntityIdKey() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel"></a>

```go
func UnitLabel() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() EvidentlyLaunchMetricMonitorsMetricDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchMetricMonitorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchMetricMonitorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition">PutMetricDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDefinition` <a name="PutMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition"></a>

```go
func PutMetricDefinition(value EvidentlyLaunchMetricMonitorsMetricDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition">MetricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput">MetricDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDefinition`<sup>Required</sup> <a name="MetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition"></a>

```go
func MetricDefinition() EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a>

---

##### `MetricDefinitionInput`<sup>Optional</sup> <a name="MetricDefinitionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput"></a>

```go
func MetricDefinitionInput() EvidentlyLaunchMetricMonitorsMetricDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyLaunchScheduledSplitsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps">PutSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps"></a>

```go
func Steps() EvidentlyLaunchScheduledSplitsConfigStepsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigStepsList <a name="EvidentlyLaunchScheduledSplitsConfigStepsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchScheduledSplitsConfigStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchScheduledSplitsConfigStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigStepsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchScheduledSplitsConfigStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides">PutSegmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides">ResetSegmentOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentOverrides` <a name="PutSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides"></a>

```go
func PutSegmentOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSegmentOverrides` <a name="ResetSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides"></a>

```go
func ResetSegmentOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides">SegmentOverrides</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput">GroupWeightsInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput">SegmentOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights">GroupWeights</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentOverrides`<sup>Required</sup> <a name="SegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides"></a>

```go
func SegmentOverrides() EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a>

---

##### `GroupWeightsInput`<sup>Optional</sup> <a name="GroupWeightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput"></a>

```go
func GroupWeightsInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `SegmentOverridesInput`<sup>Optional</sup> <a name="SegmentOverridesInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput"></a>

```go
func SegmentOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights"></a>

```go
func GroupWeights() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput">EvaluationOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput">SegmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput">WeightsInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder">EvaluationOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment">Segment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights">Weights</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluationOrderInput`<sup>Optional</sup> <a name="EvaluationOrderInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```go
func EvaluationOrderInput() *f64
```

- *Type:* *f64

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput"></a>

```go
func SegmentInput() *string
```

- *Type:* *string

---

##### `WeightsInput`<sup>Optional</sup> <a name="WeightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput"></a>

```go
func WeightsInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `EvaluationOrder`<sup>Required</sup> <a name="EvaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder"></a>

```go
func EvaluationOrder() *f64
```

- *Type:* *f64

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment"></a>

```go
func Segment() *string
```

- *Type:* *string

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights"></a>

```go
func Weights() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchTimeoutsOutputReference <a name="EvidentlyLaunchTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyLaunchTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



