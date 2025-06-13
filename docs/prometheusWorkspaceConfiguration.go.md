# `prometheusWorkspaceConfiguration` Submodule <a name="`prometheusWorkspaceConfiguration` Submodule" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusWorkspaceConfiguration <a name="PrometheusWorkspaceConfiguration" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration aws_prometheus_workspace_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.NewPrometheusWorkspaceConfiguration(scope Construct, id *string, config PrometheusWorkspaceConfigurationConfig) PrometheusWorkspaceConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig">PrometheusWorkspaceConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig">PrometheusWorkspaceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putLimitsPerLabelSet">PutLimitsPerLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetLimitsPerLabelSet">ResetLimitsPerLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetRetentionPeriodInDays">ResetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLimitsPerLabelSet` <a name="PutLimitsPerLabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putLimitsPerLabelSet"></a>

```go
func PutLimitsPerLabelSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putLimitsPerLabelSet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value PrometheusWorkspaceConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>

---

##### `ResetLimitsPerLabelSet` <a name="ResetLimitsPerLabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetLimitsPerLabelSet"></a>

```go
func ResetLimitsPerLabelSet()
```

##### `ResetRetentionPeriodInDays` <a name="ResetRetentionPeriodInDays" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetRetentionPeriodInDays"></a>

```go
func ResetRetentionPeriodInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusWorkspaceConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.PrometheusWorkspaceConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.PrometheusWorkspaceConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.PrometheusWorkspaceConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.PrometheusWorkspaceConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrometheusWorkspaceConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrometheusWorkspaceConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrometheusWorkspaceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusWorkspaceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSet">LimitsPerLabelSet</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList">PrometheusWorkspaceConfigurationLimitsPerLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference">PrometheusWorkspaceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSetInput">LimitsPerLabelSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LimitsPerLabelSet`<sup>Required</sup> <a name="LimitsPerLabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSet"></a>

```go
func LimitsPerLabelSet() PrometheusWorkspaceConfigurationLimitsPerLabelSetList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList">PrometheusWorkspaceConfigurationLimitsPerLabelSetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeouts"></a>

```go
func Timeouts() PrometheusWorkspaceConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference">PrometheusWorkspaceConfigurationTimeoutsOutputReference</a>

---

##### `LimitsPerLabelSetInput`<sup>Optional</sup> <a name="LimitsPerLabelSetInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSetInput"></a>

```go
func LimitsPerLabelSetInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDaysInput"></a>

```go
func RetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusWorkspaceConfigurationConfig <a name="PrometheusWorkspaceConfigurationConfig" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

&prometheusworkspaceconfiguration.PrometheusWorkspaceConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
	LimitsPerLabelSet: interface{},
	RetentionPeriodInDays: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v20.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.limitsPerLabelSet">LimitsPerLabelSet</a></code> | <code>interface{}</code> | limits_per_label_set block. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}.

---

##### `LimitsPerLabelSet`<sup>Optional</sup> <a name="LimitsPerLabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.limitsPerLabelSet"></a>

```go
LimitsPerLabelSet interface{}
```

- *Type:* interface{}

limits_per_label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#limits_per_label_set PrometheusWorkspaceConfiguration#limits_per_label_set}

---

##### `RetentionPeriodInDays`<sup>Optional</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.retentionPeriodInDays"></a>

```go
RetentionPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.timeouts"></a>

```go
Timeouts PrometheusWorkspaceConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#timeouts PrometheusWorkspaceConfiguration#timeouts}

---

### PrometheusWorkspaceConfigurationLimitsPerLabelSet <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

&prometheusworkspaceconfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet {
	LabelSet: *map[string]*string,
	Limits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.labelSet">LabelSet</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#label_set PrometheusWorkspaceConfiguration#label_set}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.limits">Limits</a></code> | <code>interface{}</code> | limits block. |

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.labelSet"></a>

```go
LabelSet *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#label_set PrometheusWorkspaceConfiguration#label_set}.

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.limits"></a>

```go
Limits interface{}
```

- *Type:* interface{}

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#limits PrometheusWorkspaceConfiguration#limits}

---

### PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

&prometheusworkspaceconfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits {
	MaxSeries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits.property.maxSeries">MaxSeries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#max_series PrometheusWorkspaceConfiguration#max_series}. |

---

##### `MaxSeries`<sup>Required</sup> <a name="MaxSeries" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits.property.maxSeries"></a>

```go
MaxSeries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#max_series PrometheusWorkspaceConfiguration#max_series}.

---

### PrometheusWorkspaceConfigurationTimeouts <a name="PrometheusWorkspaceConfigurationTimeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

&prometheusworkspaceconfiguration.PrometheusWorkspaceConfigurationTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#create PrometheusWorkspaceConfiguration#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#update PrometheusWorkspaceConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.NewPrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.get"></a>

```go
func Get(index *f64) PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.NewPrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeriesInput">MaxSeriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeries">MaxSeries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSeriesInput`<sup>Optional</sup> <a name="MaxSeriesInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeriesInput"></a>

```go
func MaxSeriesInput() *f64
```

- *Type:* *f64

---

##### `MaxSeries`<sup>Required</sup> <a name="MaxSeries" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeries"></a>

```go
func MaxSeries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusWorkspaceConfigurationLimitsPerLabelSetList <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetList" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.NewPrometheusWorkspaceConfigurationLimitsPerLabelSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrometheusWorkspaceConfigurationLimitsPerLabelSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.get"></a>

```go
func Get(index *f64) PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.NewPrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.putLimits"></a>

```go
func PutLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.putLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resetLimits"></a>

```go
func ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSetInput">LabelSetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limitsInput">LimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSet">LabelSet</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limits"></a>

```go
func Limits() PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList</a>

---

##### `LabelSetInput`<sup>Optional</sup> <a name="LabelSetInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSetInput"></a>

```go
func LabelSetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limitsInput"></a>

```go
func LimitsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSet"></a>

```go
func LabelSet() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusWorkspaceConfigurationTimeoutsOutputReference <a name="PrometheusWorkspaceConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/prometheusworkspaceconfiguration"

prometheusworkspaceconfiguration.NewPrometheusWorkspaceConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrometheusWorkspaceConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



