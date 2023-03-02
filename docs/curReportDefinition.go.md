# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktf/provider-aws.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition aws_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/curreportdefinition"

curreportdefinition.NewCurReportDefinition(scope Construct, id *string, config CurReportDefinitionConfig) CurReportDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">ResetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports">ResetRefreshClosedReports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning">ResetReportVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix">ResetS3Prefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAdditionalArtifacts` <a name="ResetAdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```go
func ResetAdditionalArtifacts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshClosedReports` <a name="ResetRefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports"></a>

```go
func ResetRefreshClosedReports()
```

##### `ResetReportVersioning` <a name="ResetReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning"></a>

```go
func ResetReportVersioning()
```

##### `ResetS3Prefix` <a name="ResetS3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix"></a>

```go
func ResetS3Prefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/curreportdefinition"

curreportdefinition.CurReportDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/curreportdefinition"

curreportdefinition.CurReportDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/curreportdefinition"

curreportdefinition.CurReportDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">AdditionalArtifactsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">AdditionalSchemaElementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">RefreshClosedReportsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput">ReportNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput">ReportVersioningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput">S3PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput">S3RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput">TimeUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName">ReportName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning">ReportVersioning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix">S3Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region">S3Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AdditionalArtifactsInput`<sup>Optional</sup> <a name="AdditionalArtifactsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```go
func AdditionalArtifactsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalSchemaElementsInput`<sup>Optional</sup> <a name="AdditionalSchemaElementsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```go
func AdditionalSchemaElementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RefreshClosedReportsInput`<sup>Optional</sup> <a name="RefreshClosedReportsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```go
func RefreshClosedReportsInput() interface{}
```

- *Type:* interface{}

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```go
func ReportNameInput() *string
```

- *Type:* *string

---

##### `ReportVersioningInput`<sup>Optional</sup> <a name="ReportVersioningInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```go
func ReportVersioningInput() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```go
func S3PrefixInput() *string
```

- *Type:* *string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```go
func S3RegionInput() *string
```

- *Type:* *string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```go
func TimeUnitInput() *string
```

- *Type:* *string

---

##### `AdditionalArtifacts`<sup>Required</sup> <a name="AdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```go
func AdditionalArtifacts() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```go
func AdditionalSchemaElements() *[]*string
```

- *Type:* *[]*string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshClosedReports`<sup>Required</sup> <a name="RefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```go
func RefreshClosedReports() interface{}
```

- *Type:* interface{}

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName"></a>

```go
func ReportName() *string
```

- *Type:* *string

---

##### `ReportVersioning`<sup>Required</sup> <a name="ReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```go
func ReportVersioning() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```go
func S3Prefix() *string
```

- *Type:* *string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```go
func S3Region() *string
```

- *Type:* *string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```go
func TimeUnit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/curreportdefinition"

&curreportdefinition.CurReportDefinitionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalSchemaElements: *[]*string,
	Compression: *string,
	Format: *string,
	ReportName: *string,
	S3Bucket: *string,
	S3Region: *string,
	TimeUnit: *string,
	AdditionalArtifacts: *[]*string,
	Id: *string,
	RefreshClosedReports: interface{},
	ReportVersioning: *string,
	S3Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression">Compression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName">ReportName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region">S3Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">ReportVersioning</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">S3Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```go
AdditionalSchemaElements *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```go
ReportName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```go
S3Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```go
TimeUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `AdditionalArtifacts`<sup>Optional</sup> <a name="AdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```go
AdditionalArtifacts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshClosedReports`<sup>Optional</sup> <a name="RefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```go
RefreshClosedReports interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `ReportVersioning`<sup>Optional</sup> <a name="ReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```go
ReportVersioning *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `S3Prefix`<sup>Optional</sup> <a name="S3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```go
S3Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---



