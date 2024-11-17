# `dataAwsAthenaNamedQuery` Submodule <a name="`dataAwsAthenaNamedQuery` Submodule" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAthenaNamedQuery <a name="DataAwsAthenaNamedQuery" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query aws_athena_named_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsathenanamedquery"

dataawsathenanamedquery.NewDataAwsAthenaNamedQuery(scope Construct, id *string, config DataAwsAthenaNamedQueryConfig) DataAwsAthenaNamedQuery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig">DataAwsAthenaNamedQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig">DataAwsAthenaNamedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetId"></a>

```go
func ResetId()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetWorkgroup"></a>

```go
func ResetWorkgroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAthenaNamedQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsathenanamedquery"

dataawsathenanamedquery.DataAwsAthenaNamedQuery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsathenanamedquery"

dataawsathenanamedquery.DataAwsAthenaNamedQuery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsathenanamedquery"

dataawsathenanamedquery.DataAwsAthenaNamedQuery_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsathenanamedquery"

dataawsathenanamedquery.DataAwsAthenaNamedQuery_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsAthenaNamedQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsAthenaNamedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsAthenaNamedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAthenaNamedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.querystring">Querystring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroupInput">WorkgroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroup">Workgroup</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Querystring`<sup>Required</sup> <a name="Querystring" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.querystring"></a>

```go
func Querystring() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroupInput"></a>

```go
func WorkgroupInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroup"></a>

```go
func Workgroup() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAthenaNamedQueryConfig <a name="DataAwsAthenaNamedQueryConfig" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsathenanamedquery"

&dataawsathenanamedquery.DataAwsAthenaNamedQueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Workgroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#name DataAwsAthenaNamedQuery#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#id DataAwsAthenaNamedQuery#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.workgroup">Workgroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#workgroup DataAwsAthenaNamedQuery#workgroup}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#name DataAwsAthenaNamedQuery#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#id DataAwsAthenaNamedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.workgroup"></a>

```go
Workgroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/athena_named_query#workgroup DataAwsAthenaNamedQuery#workgroup}.

---



