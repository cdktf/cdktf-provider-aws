# `dataAwsDevopsguruResourceCollection` Submodule <a name="`dataAwsDevopsguruResourceCollection` Submodule" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDevopsguruResourceCollection <a name="DataAwsDevopsguruResourceCollection" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.NewDataAwsDevopsguruResourceCollection(scope Construct, id *string, config DataAwsDevopsguruResourceCollectionConfig) DataAwsDevopsguruResourceCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig">DataAwsDevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig">DataAwsDevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putCloudformation">PutCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetCloudformation">ResetCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudformation` <a name="PutCloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putCloudformation"></a>

```go
func PutCloudformation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putCloudformation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudformation` <a name="ResetCloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetCloudformation"></a>

```go
func ResetCloudformation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsDevopsguruResourceCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsDevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList">DataAwsDevopsguruResourceCollectionCloudformationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList">DataAwsDevopsguruResourceCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformationInput">CloudformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Cloudformation`<sup>Required</sup> <a name="Cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformation"></a>

```go
func Cloudformation() DataAwsDevopsguruResourceCollectionCloudformationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList">DataAwsDevopsguruResourceCollectionCloudformationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tags"></a>

```go
func Tags() DataAwsDevopsguruResourceCollectionTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList">DataAwsDevopsguruResourceCollectionTagsList</a>

---

##### `CloudformationInput`<sup>Optional</sup> <a name="CloudformationInput" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformationInput"></a>

```go
func CloudformationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDevopsguruResourceCollectionCloudformation <a name="DataAwsDevopsguruResourceCollectionCloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

&dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollectionCloudformation {

}
```


### DataAwsDevopsguruResourceCollectionConfig <a name="DataAwsDevopsguruResourceCollectionConfig" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

&dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	Cloudformation: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.cloudformation">Cloudformation</a></code> | <code>interface{}</code> | cloudformation block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}.

---

##### `Cloudformation`<sup>Optional</sup> <a name="Cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.cloudformation"></a>

```go
Cloudformation interface{}
```

- *Type:* interface{}

cloudformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/devopsguru_resource_collection#cloudformation DataAwsDevopsguruResourceCollection#cloudformation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/devopsguru_resource_collection#tags DataAwsDevopsguruResourceCollection#tags}

---

### DataAwsDevopsguruResourceCollectionTags <a name="DataAwsDevopsguruResourceCollectionTags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

&dataawsdevopsgururesourcecollection.DataAwsDevopsguruResourceCollectionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDevopsguruResourceCollectionCloudformationList <a name="DataAwsDevopsguruResourceCollectionCloudformationList" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.NewDataAwsDevopsguruResourceCollectionCloudformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDevopsguruResourceCollectionCloudformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get"></a>

```go
func Get(index *f64) DataAwsDevopsguruResourceCollectionCloudformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsDevopsguruResourceCollectionCloudformationOutputReference <a name="DataAwsDevopsguruResourceCollectionCloudformationOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.NewDataAwsDevopsguruResourceCollectionCloudformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDevopsguruResourceCollectionCloudformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.stackNames">StackNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.stackNames"></a>

```go
func StackNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsDevopsguruResourceCollectionTagsList <a name="DataAwsDevopsguruResourceCollectionTagsList" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.NewDataAwsDevopsguruResourceCollectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDevopsguruResourceCollectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get"></a>

```go
func Get(index *f64) DataAwsDevopsguruResourceCollectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsDevopsguruResourceCollectionTagsOutputReference <a name="DataAwsDevopsguruResourceCollectionTagsOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdevopsgururesourcecollection"

dataawsdevopsgururesourcecollection.NewDataAwsDevopsguruResourceCollectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDevopsguruResourceCollectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppBoundaryKey`<sup>Required</sup> <a name="AppBoundaryKey" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey"></a>

```go
func AppBoundaryKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



