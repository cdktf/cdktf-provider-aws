# `auditmanagerAssessmentReport` Submodule <a name="`auditmanagerAssessmentReport` Submodule" id="@cdktf/provider-aws.auditmanagerAssessmentReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentReport <a name="AuditmanagerAssessmentReport" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report aws_auditmanager_assessment_report}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessmentreport"

auditmanagerassessmentreport.NewAuditmanagerAssessmentReport(scope Construct, id *string, config AuditmanagerAssessmentReportConfig) AuditmanagerAssessmentReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig">AuditmanagerAssessmentReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig">AuditmanagerAssessmentReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessmentreport"

auditmanagerassessmentreport.AuditmanagerAssessmentReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessmentreport"

auditmanagerassessmentreport.AuditmanagerAssessmentReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessmentreport"

auditmanagerassessmentreport.AuditmanagerAssessmentReport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.author">Author</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentIdInput">AssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentId">AssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.author"></a>

```go
func Author() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AssessmentIdInput`<sup>Optional</sup> <a name="AssessmentIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentIdInput"></a>

```go
func AssessmentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentId"></a>

```go
func AssessmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentReportConfig <a name="AuditmanagerAssessmentReportConfig" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessmentreport"

&auditmanagerassessmentreport.AuditmanagerAssessmentReportConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssessmentId: *string,
	Name: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.assessmentId">AssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.assessmentId"></a>

```go
AssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}.

---



