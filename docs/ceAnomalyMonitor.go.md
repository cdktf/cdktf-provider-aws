# `ceAnomalyMonitor` Submodule <a name="`ceAnomalyMonitor` Submodule" id="@cdktf/provider-aws.ceAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalyMonitor <a name="CeAnomalyMonitor" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor aws_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalymonitor"

ceanomalymonitor.NewCeAnomalyMonitor(scope Construct, id *string, config CeAnomalyMonitorConfig) CeAnomalyMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension">ResetMonitorDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification">ResetMonitorSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetMonitorDimension` <a name="ResetMonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension"></a>

```go
func ResetMonitorDimension()
```

##### `ResetMonitorSpecification` <a name="ResetMonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification"></a>

```go
func ResetMonitorSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalymonitor"

ceanomalymonitor.CeAnomalyMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalymonitor"

ceanomalymonitor.CeAnomalyMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalymonitor"

ceanomalymonitor.CeAnomalyMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput">MonitorDimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput">MonitorSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput">MonitorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension">MonitorDimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification">MonitorSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType">MonitorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonitorDimensionInput`<sup>Optional</sup> <a name="MonitorDimensionInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput"></a>

```go
func MonitorDimensionInput() *string
```

- *Type:* *string

---

##### `MonitorSpecificationInput`<sup>Optional</sup> <a name="MonitorSpecificationInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput"></a>

```go
func MonitorSpecificationInput() *string
```

- *Type:* *string

---

##### `MonitorTypeInput`<sup>Optional</sup> <a name="MonitorTypeInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput"></a>

```go
func MonitorTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorDimension`<sup>Required</sup> <a name="MonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension"></a>

```go
func MonitorDimension() *string
```

- *Type:* *string

---

##### `MonitorSpecification`<sup>Required</sup> <a name="MonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification"></a>

```go
func MonitorSpecification() *string
```

- *Type:* *string

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType"></a>

```go
func MonitorType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalyMonitorConfig <a name="CeAnomalyMonitorConfig" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalymonitor"

&ceanomalymonitor.CeAnomalyMonitorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorType: *string,
	Name: *string,
	Id: *string,
	MonitorDimension: *string,
	MonitorSpecification: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType">MonitorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension">MonitorDimension</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification">MonitorSpecification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType"></a>

```go
MonitorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitorDimension`<sup>Optional</sup> <a name="MonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension"></a>

```go
MonitorDimension *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}.

---

##### `MonitorSpecification`<sup>Optional</sup> <a name="MonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification"></a>

```go
MonitorSpecification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}.

---



