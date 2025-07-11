# `dataAwsRoute53Records` Submodule <a name="`dataAwsRoute53Records` Submodule" id="@cdktf/provider-aws.dataAwsRoute53Records"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53Records <a name="DataAwsRoute53Records" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/route53_records aws_route53_records}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53Records(scope Construct, id *string, config DataAwsRoute53RecordsConfig) DataAwsRoute53Records
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig">DataAwsRoute53RecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig">DataAwsRoute53RecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetNameRegex">ResetNameRegex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetNameRegex"></a>

```go
func ResetNameRegex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.DataAwsRoute53Records_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.DataAwsRoute53Records_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.DataAwsRoute53Records_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.DataAwsRoute53Records_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsRoute53Records to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsRoute53Records that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/route53_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53Records to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.resourceRecordSets">ResourceRecordSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList">DataAwsRoute53RecordsResourceRecordSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegexInput">NameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegex">NameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ResourceRecordSets`<sup>Required</sup> <a name="ResourceRecordSets" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.resourceRecordSets"></a>

```go
func ResourceRecordSets() DataAwsRoute53RecordsResourceRecordSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList">DataAwsRoute53RecordsResourceRecordSetsList</a>

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegexInput"></a>

```go
func NameRegexInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegex"></a>

```go
func NameRegex() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53RecordsConfig <a name="DataAwsRoute53RecordsConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	NameRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.nameRegex">NameRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}.

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.nameRegex"></a>

```go
NameRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}.

---

### DataAwsRoute53RecordsResourceRecordSets <a name="DataAwsRoute53RecordsResourceRecordSets" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSets {

}
```


### DataAwsRoute53RecordsResourceRecordSetsAliasTarget <a name="DataAwsRoute53RecordsResourceRecordSetsAliasTarget" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget {

}
```


### DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig <a name="DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig {

}
```


### DataAwsRoute53RecordsResourceRecordSetsGeolocation <a name="DataAwsRoute53RecordsResourceRecordSetsGeolocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSetsGeolocation {

}
```


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation {

}
```


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates {

}
```


### DataAwsRoute53RecordsResourceRecordSetsResourceRecords <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecords" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

&dataawsroute53records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget">DataAwsRoute53RecordsResourceRecordSetsAliasTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```go
func EvaluateTargetHealth() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSetsAliasTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget">DataAwsRoute53RecordsResourceRecordSetsAliasTarget</a>

---


### DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.continentCode">ContinentCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.subdivisionCode">SubdivisionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation">DataAwsRoute53RecordsResourceRecordSetsGeolocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinentCode`<sup>Required</sup> <a name="ContinentCode" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.continentCode"></a>

```go
func ContinentCode() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `SubdivisionCode`<sup>Required</sup> <a name="SubdivisionCode" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.subdivisionCode"></a>

```go
func SubdivisionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSetsGeolocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation">DataAwsRoute53RecordsResourceRecordSetsGeolocation</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.latitude">Latitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.longitude">Longitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```go
func Latitude() *string
```

- *Type:* *string

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```go
func Longitude() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.bias">Bias</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.coordinates">Coordinates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Bias`<sup>Required</sup> <a name="Bias" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.bias"></a>

```go
func Bias() *f64
```

- *Type:* *f64

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.coordinates"></a>

```go
func Coordinates() DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference</a>

---

##### `LocalZoneGroup`<sup>Required</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```go
func LocalZoneGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation</a>

---


### DataAwsRoute53RecordsResourceRecordSetsList <a name="DataAwsRoute53RecordsResourceRecordSetsList" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRoute53RecordsResourceRecordSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get"></a>

```go
func Get(index *f64) DataAwsRoute53RecordsResourceRecordSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsRoute53RecordsResourceRecordSetsOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRoute53RecordsResourceRecordSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.aliasTarget">AliasTarget</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference">DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.failover">Failover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geolocation">Geolocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geoproximityLocation">GeoproximityLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList">DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.trafficPolicyInstanceId">TrafficPolicyInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets">DataAwsRoute53RecordsResourceRecordSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasTarget`<sup>Required</sup> <a name="AliasTarget" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.aliasTarget"></a>

```go
func AliasTarget() DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference">DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference</a>

---

##### `CidrRoutingConfig`<sup>Required</sup> <a name="CidrRoutingConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.cidrRoutingConfig"></a>

```go
func CidrRoutingConfig() DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference</a>

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.failover"></a>

```go
func Failover() *string
```

- *Type:* *string

---

##### `Geolocation`<sup>Required</sup> <a name="Geolocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geolocation"></a>

```go
func Geolocation() DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference</a>

---

##### `GeoproximityLocation`<sup>Required</sup> <a name="GeoproximityLocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geoproximityLocation"></a>

```go
func GeoproximityLocation() DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference</a>

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.healthCheckId"></a>

```go
func HealthCheckId() *string
```

- *Type:* *string

---

##### `MultiValueAnswer`<sup>Required</sup> <a name="MultiValueAnswer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.multiValueAnswer"></a>

```go
func MultiValueAnswer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.resourceRecords"></a>

```go
func ResourceRecords() DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList">DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList</a>

---

##### `SetIdentifier`<sup>Required</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.setIdentifier"></a>

```go
func SetIdentifier() *string
```

- *Type:* *string

---

##### `TrafficPolicyInstanceId`<sup>Required</sup> <a name="TrafficPolicyInstanceId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.trafficPolicyInstanceId"></a>

```go
func TrafficPolicyInstanceId() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSets
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets">DataAwsRoute53RecordsResourceRecordSets</a>

---


### DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsResourceRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get"></a>

```go
func Get(index *f64) DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsroute53records"

dataawsroute53records.NewDataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords">DataAwsRoute53RecordsResourceRecordSetsResourceRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53RecordsResourceRecordSetsResourceRecords
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords">DataAwsRoute53RecordsResourceRecordSetsResourceRecords</a>

---



