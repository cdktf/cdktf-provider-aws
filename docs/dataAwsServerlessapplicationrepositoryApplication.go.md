# `dataAwsServerlessapplicationrepositoryApplication` Submodule <a name="`dataAwsServerlessapplicationrepositoryApplication` Submodule" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServerlessapplicationrepositoryApplication <a name="DataAwsServerlessapplicationrepositoryApplication" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsserverlessapplicationrepositoryapplication"

dataawsserverlessapplicationrepositoryapplication.NewDataAwsServerlessapplicationrepositoryApplication(scope Construct, id *string, config DataAwsServerlessapplicationrepositoryApplicationConfig) DataAwsServerlessapplicationrepositoryApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig">DataAwsServerlessapplicationrepositoryApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig">DataAwsServerlessapplicationrepositoryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetSemanticVersion"></a>

```go
func ResetSemanticVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsserverlessapplicationrepositoryapplication"

dataawsserverlessapplicationrepositoryapplication.DataAwsServerlessapplicationrepositoryApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsserverlessapplicationrepositoryapplication"

dataawsserverlessapplicationrepositoryapplication.DataAwsServerlessapplicationrepositoryApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsserverlessapplicationrepositoryapplication"

dataawsserverlessapplicationrepositoryapplication.DataAwsServerlessapplicationrepositoryApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.requiredCapabilities">RequiredCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.sourceCodeUrl">SourceCodeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequiredCapabilities`<sup>Required</sup> <a name="RequiredCapabilities" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.requiredCapabilities"></a>

```go
func RequiredCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `SourceCodeUrl`<sup>Required</sup> <a name="SourceCodeUrl" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.sourceCodeUrl"></a>

```go
func SourceCodeUrl() *string
```

- *Type:* *string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.templateUrl"></a>

```go
func TemplateUrl() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersionInput"></a>

```go
func SemanticVersionInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersion"></a>

```go
func SemanticVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServerlessapplicationrepositoryApplicationConfig <a name="DataAwsServerlessapplicationrepositoryApplicationConfig" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsserverlessapplicationrepositoryapplication"

&dataawsserverlessapplicationrepositoryapplication.DataAwsServerlessapplicationrepositoryApplicationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Id: *string,
	SemanticVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.semanticVersion"></a>

```go
SemanticVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}.

---



