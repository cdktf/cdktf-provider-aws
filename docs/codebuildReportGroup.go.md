# `codebuildReportGroup` Submodule <a name="`codebuildReportGroup` Submodule" id="@cdktf/provider-aws.codebuildReportGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildReportGroup <a name="CodebuildReportGroup" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group aws_codebuild_report_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

codebuildreportgroup.NewCodebuildReportGroup(scope Construct, id *string, config CodebuildReportGroupConfig) CodebuildReportGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig">CodebuildReportGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig">CodebuildReportGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig">PutExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports">ResetDeleteReports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExportConfig` <a name="PutExportConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig"></a>

```go
func PutExportConfig(value CodebuildReportGroupExportConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `ResetDeleteReports` <a name="ResetDeleteReports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports"></a>

```go
func ResetDeleteReports()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

codebuildreportgroup.CodebuildReportGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

codebuildreportgroup.CodebuildReportGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

codebuildreportgroup.CodebuildReportGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfig">ExportConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput">DeleteReportsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput">ExportConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReports">DeleteReports</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `ExportConfig`<sup>Required</sup> <a name="ExportConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfig"></a>

```go
func ExportConfig() CodebuildReportGroupExportConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a>

---

##### `DeleteReportsInput`<sup>Optional</sup> <a name="DeleteReportsInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput"></a>

```go
func DeleteReportsInput() interface{}
```

- *Type:* interface{}

---

##### `ExportConfigInput`<sup>Optional</sup> <a name="ExportConfigInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput"></a>

```go
func ExportConfigInput() CodebuildReportGroupExportConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DeleteReports`<sup>Required</sup> <a name="DeleteReports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReports"></a>

```go
func DeleteReports() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildReportGroupConfig <a name="CodebuildReportGroupConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

&codebuildreportgroup.CodebuildReportGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExportConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildReportGroup.CodebuildReportGroupExportConfig,
	Name: *string,
	Type: *string,
	DeleteReports: interface{},
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig">ExportConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | export_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports">DeleteReports</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportConfig`<sup>Required</sup> <a name="ExportConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig"></a>

```go
ExportConfig CodebuildReportGroupExportConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

export_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#export_config CodebuildReportGroup#export_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `DeleteReports`<sup>Optional</sup> <a name="DeleteReports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports"></a>

```go
DeleteReports interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}.

---

### CodebuildReportGroupExportConfig <a name="CodebuildReportGroupExportConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

&codebuildreportgroup.CodebuildReportGroupExportConfig {
	Type: *string,
	S3Destination: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | s3_destination block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination"></a>

```go
S3Destination CodebuildReportGroupExportConfigS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}

---

### CodebuildReportGroupExportConfigS3Destination <a name="CodebuildReportGroupExportConfigS3Destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

&codebuildreportgroup.CodebuildReportGroupExportConfigS3Destination {
	Bucket: *string,
	EncryptionKey: *string,
	EncryptionDisabled: interface{},
	Packaging: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#bucket CodebuildReportGroup#bucket}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging">Packaging</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#packaging CodebuildReportGroup#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#path CodebuildReportGroup#path}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#bucket CodebuildReportGroup#bucket}.

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled"></a>

```go
EncryptionDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}.

---

##### `Packaging`<sup>Optional</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging"></a>

```go
Packaging *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#packaging CodebuildReportGroup#packaging}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#path CodebuildReportGroup#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildReportGroupExportConfigOutputReference <a name="CodebuildReportGroupExportConfigOutputReference" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

codebuildreportgroup.NewCodebuildReportGroupExportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildReportGroupExportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination"></a>

```go
func PutS3Destination(value CodebuildReportGroupExportConfigS3Destination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination"></a>

```go
func ResetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination"></a>

```go
func S3Destination() CodebuildReportGroupExportConfigS3DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput"></a>

```go
func S3DestinationInput() CodebuildReportGroupExportConfigS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildReportGroupExportConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---


### CodebuildReportGroupExportConfigS3DestinationOutputReference <a name="CodebuildReportGroupExportConfigS3DestinationOutputReference" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildreportgroup"

codebuildreportgroup.NewCodebuildReportGroupExportConfigS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildReportGroupExportConfigS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled">ResetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging">ResetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled"></a>

```go
func ResetEncryptionDisabled()
```

##### `ResetPackaging` <a name="ResetPackaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging"></a>

```go
func ResetPackaging()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput">PackagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging">Packaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput"></a>

```go
func EncryptionDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `PackagingInput`<sup>Optional</sup> <a name="PackagingInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput"></a>

```go
func PackagingInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled"></a>

```go
func EncryptionDisabled() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `Packaging`<sup>Required</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging"></a>

```go
func Packaging() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildReportGroupExportConfigS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---



