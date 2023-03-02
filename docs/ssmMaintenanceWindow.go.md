# `ssmMaintenanceWindow` Submodule <a name="`ssmMaintenanceWindow` Submodule" id="@cdktf/provider-aws.ssmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindow <a name="SsmMaintenanceWindow" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window aws_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindow"

ssmmaintenancewindow.NewSsmMaintenanceWindow(scope Construct, id *string, config SsmMaintenanceWindowConfig) SsmMaintenanceWindow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetAllowUnassociatedTargets">ResetAllowUnassociatedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset">ResetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone">ResetScheduleTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowUnassociatedTargets` <a name="ResetAllowUnassociatedTargets" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetAllowUnassociatedTargets"></a>

```go
func ResetAllowUnassociatedTargets()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetId"></a>

```go
func ResetId()
```

##### `ResetScheduleOffset` <a name="ResetScheduleOffset" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset"></a>

```go
func ResetScheduleOffset()
```

##### `ResetScheduleTimezone` <a name="ResetScheduleTimezone" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone"></a>

```go
func ResetScheduleTimezone()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput">AllowUnassociatedTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput">CutoffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput">ScheduleOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput">ScheduleTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets">AllowUnassociatedTargets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff">Cutoff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset">ScheduleOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone">ScheduleTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowUnassociatedTargetsInput`<sup>Optional</sup> <a name="AllowUnassociatedTargetsInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput"></a>

```go
func AllowUnassociatedTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `CutoffInput`<sup>Optional</sup> <a name="CutoffInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput"></a>

```go
func CutoffInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `ScheduleOffsetInput`<sup>Optional</sup> <a name="ScheduleOffsetInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput"></a>

```go
func ScheduleOffsetInput() *f64
```

- *Type:* *f64

---

##### `ScheduleTimezoneInput`<sup>Optional</sup> <a name="ScheduleTimezoneInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput"></a>

```go
func ScheduleTimezoneInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AllowUnassociatedTargets`<sup>Required</sup> <a name="AllowUnassociatedTargets" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```go
func AllowUnassociatedTargets() interface{}
```

- *Type:* interface{}

---

##### `Cutoff`<sup>Required</sup> <a name="Cutoff" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff"></a>

```go
func Cutoff() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduleOffset`<sup>Required</sup> <a name="ScheduleOffset" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset"></a>

```go
func ScheduleOffset() *f64
```

- *Type:* *f64

---

##### `ScheduleTimezone`<sup>Required</sup> <a name="ScheduleTimezone" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone"></a>

```go
func ScheduleTimezone() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowConfig <a name="SsmMaintenanceWindowConfig" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindow"

&ssmmaintenancewindow.SsmMaintenanceWindowConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cutoff: *f64,
	Duration: *f64,
	Name: *string,
	Schedule: *string,
	AllowUnassociatedTargets: interface{},
	Description: *string,
	Enabled: interface{},
	EndDate: *string,
	Id: *string,
	ScheduleOffset: *f64,
	ScheduleTimezone: *string,
	StartDate: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff">Cutoff</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#name SsmMaintenanceWindow#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets">AllowUnassociatedTargets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#description SsmMaintenanceWindow#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#id SsmMaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset">ScheduleOffset</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone">ScheduleTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate">StartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cutoff`<sup>Required</sup> <a name="Cutoff" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff"></a>

```go
Cutoff *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#name SsmMaintenanceWindow#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}.

---

##### `AllowUnassociatedTargets`<sup>Optional</sup> <a name="AllowUnassociatedTargets" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets"></a>

```go
AllowUnassociatedTargets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#description SsmMaintenanceWindow#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#id SsmMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScheduleOffset`<sup>Optional</sup> <a name="ScheduleOffset" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset"></a>

```go
ScheduleOffset *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}.

---

##### `ScheduleTimezone`<sup>Optional</sup> <a name="ScheduleTimezone" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone"></a>

```go
ScheduleTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}.

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}.

---



