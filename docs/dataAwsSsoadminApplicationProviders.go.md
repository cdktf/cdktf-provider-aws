# `dataAwsSsoadminApplicationProviders` Submodule <a name="`dataAwsSsoadminApplicationProviders` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminApplicationProviders <a name="DataAwsSsoadminApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.NewDataAwsSsoadminApplicationProviders(scope Construct, id *string, config DataAwsSsoadminApplicationProvidersConfig) DataAwsSsoadminApplicationProviders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig">DataAwsSsoadminApplicationProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig">DataAwsSsoadminApplicationProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders">PutApplicationProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetApplicationProviders">ResetApplicationProviders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApplicationProviders` <a name="PutApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders"></a>

```go
func PutApplicationProviders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationProviders` <a name="ResetApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetApplicationProviders"></a>

```go
func ResetApplicationProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProviders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProviders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProviders_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProviders_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSsoadminApplicationProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSsoadminApplicationProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/ssoadmin_application_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminApplicationProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProviders">ApplicationProviders</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList">DataAwsSsoadminApplicationProvidersApplicationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProvidersInput">ApplicationProvidersInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationProviders`<sup>Required</sup> <a name="ApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProviders"></a>

```go
func ApplicationProviders() DataAwsSsoadminApplicationProvidersApplicationProvidersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList">DataAwsSsoadminApplicationProvidersApplicationProvidersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApplicationProvidersInput`<sup>Optional</sup> <a name="ApplicationProvidersInput" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProvidersInput"></a>

```go
func ApplicationProvidersInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminApplicationProvidersApplicationProviders <a name="DataAwsSsoadminApplicationProvidersApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

&dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProvidersApplicationProviders {
	DisplayData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.property.displayData">DisplayData</a></code> | <code>interface{}</code> | display_data block. |

---

##### `DisplayData`<sup>Optional</sup> <a name="DisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.property.displayData"></a>

```go
DisplayData interface{}
```

- *Type:* interface{}

display_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/ssoadmin_application_providers#display_data DataAwsSsoadminApplicationProviders#display_data}

---

### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

&dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData {

}
```


### DataAwsSsoadminApplicationProvidersConfig <a name="DataAwsSsoadminApplicationProvidersConfig" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

&dataawsssoadminapplicationproviders.DataAwsSsoadminApplicationProvidersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationProviders: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.applicationProviders">ApplicationProviders</a></code> | <code>interface{}</code> | application_providers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationProviders`<sup>Optional</sup> <a name="ApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.applicationProviders"></a>

```go
ApplicationProviders interface{}
```

- *Type:* interface{}

application_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/ssoadmin_application_providers#application_providers DataAwsSsoadminApplicationProviders#application_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.NewDataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get"></a>

```go
func Get(index *f64) DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.NewDataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersList <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.NewDataAwsSsoadminApplicationProvidersApplicationProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsoadminApplicationProvidersApplicationProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get"></a>

```go
func Get(index *f64) DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssoadminapplicationproviders"

dataawsssoadminapplicationproviders.NewDataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData">PutDisplayData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resetDisplayData">ResetDisplayData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisplayData` <a name="PutDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData"></a>

```go
func PutDisplayData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayData` <a name="ResetDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resetDisplayData"></a>

```go
func ResetDisplayData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.applicationProviderArn">ApplicationProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayData">DisplayData</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.federationProtocol">FederationProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayDataInput">DisplayDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationProviderArn`<sup>Required</sup> <a name="ApplicationProviderArn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.applicationProviderArn"></a>

```go
func ApplicationProviderArn() *string
```

- *Type:* *string

---

##### `DisplayData`<sup>Required</sup> <a name="DisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayData"></a>

```go
func DisplayData() DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList</a>

---

##### `FederationProtocol`<sup>Required</sup> <a name="FederationProtocol" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.federationProtocol"></a>

```go
func FederationProtocol() *string
```

- *Type:* *string

---

##### `DisplayDataInput`<sup>Optional</sup> <a name="DisplayDataInput" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayDataInput"></a>

```go
func DisplayDataInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



