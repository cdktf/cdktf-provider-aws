# `dataAwsSsmcontactsRotation` Submodule <a name="`dataAwsSsmcontactsRotation` Submodule" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsRotation <a name="DataAwsSsmcontactsRotation" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotation(scope Construct, id *string, config DataAwsSsmcontactsRotationConfig) DataAwsSsmcontactsRotation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig">DataAwsSsmcontactsRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig">DataAwsSsmcontactsRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.DataAwsSsmcontactsRotation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.DataAwsSsmcontactsRotation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.DataAwsSsmcontactsRotation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.DataAwsSsmcontactsRotation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSsmcontactsRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.contactIds">ContactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList">DataAwsSsmcontactsRotationRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.timeZoneId">TimeZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ContactIds`<sup>Required</sup> <a name="ContactIds" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.contactIds"></a>

```go
func ContactIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.recurrence"></a>

```go
func Recurrence() DataAwsSsmcontactsRotationRecurrenceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList">DataAwsSsmcontactsRotationRecurrenceList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.timeZoneId"></a>

```go
func TimeZoneId() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsRotationConfig <a name="DataAwsSsmcontactsRotationConfig" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}.

---

### DataAwsSsmcontactsRotationRecurrence <a name="DataAwsSsmcontactsRotationRecurrence" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrence {

}
```


### DataAwsSsmcontactsRotationRecurrenceDailySettings <a name="DataAwsSsmcontactsRotationRecurrenceDailySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceDailySettings {

}
```


### DataAwsSsmcontactsRotationRecurrenceMonthlySettings <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings {

}
```


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {

}
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoverages <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoverages" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages {

}
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {

}
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {

}
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {

}
```


### DataAwsSsmcontactsRotationRecurrenceWeeklySettings <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings {

}
```


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

&dataawsssmcontactsrotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsRotationRecurrenceDailySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceDailySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceDailySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceDailySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings">DataAwsSsmcontactsRotationRecurrenceDailySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour"></a>

```go
func MinuteOfHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceDailySettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings">DataAwsSsmcontactsRotationRecurrenceDailySettings</a>

---


### DataAwsSsmcontactsRotationRecurrenceList <a name="DataAwsSsmcontactsRotationRecurrenceList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```go
func MinuteOfHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceMonthlySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">HandOffTime</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings">DataAwsSsmcontactsRotationRecurrenceMonthlySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```go
func DayOfMonth() *f64
```

- *Type:* *f64

---

##### `HandOffTime`<sup>Required</sup> <a name="HandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```go
func HandOffTime() DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceMonthlySettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings">DataAwsSsmcontactsRotationRecurrenceMonthlySettings</a>

---


### DataAwsSsmcontactsRotationRecurrenceOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.dailySettings">DailySettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList">DataAwsSsmcontactsRotationRecurrenceDailySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">MonthlySettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">NumberOfOnCalls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">RecurrenceMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">ShiftCoverages</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">WeeklySettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence">DataAwsSsmcontactsRotationRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySettings`<sup>Required</sup> <a name="DailySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```go
func DailySettings() DataAwsSsmcontactsRotationRecurrenceDailySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList">DataAwsSsmcontactsRotationRecurrenceDailySettingsList</a>

---

##### `MonthlySettings`<sup>Required</sup> <a name="MonthlySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```go
func MonthlySettings() DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `NumberOfOnCalls`<sup>Required</sup> <a name="NumberOfOnCalls" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```go
func NumberOfOnCalls() *f64
```

- *Type:* *f64

---

##### `RecurrenceMultiplier`<sup>Required</sup> <a name="RecurrenceMultiplier" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```go
func RecurrenceMultiplier() *f64
```

- *Type:* *f64

---

##### `ShiftCoverages`<sup>Required</sup> <a name="ShiftCoverages" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```go
func ShiftCoverages() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `WeeklySettings`<sup>Required</sup> <a name="WeeklySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```go
func WeeklySettings() DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrence
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence">DataAwsSsmcontactsRotationRecurrence</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour"></a>

```go
func MinuteOfHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end">End</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start">Start</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end"></a>

```go
func End() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a>

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start"></a>

```go
func Start() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour"></a>

```go
func MinuteOfHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">CoverageTimes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey">MapBlockKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages">DataAwsSsmcontactsRotationRecurrenceShiftCoverages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoverageTimes`<sup>Required</sup> <a name="CoverageTimes" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```go
func CoverageTimes() DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey"></a>

```go
func MapBlockKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceShiftCoverages
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages">DataAwsSsmcontactsRotationRecurrenceShiftCoverages</a>

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```go
func MinuteOfHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceWeeklySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```go
func Get(index *f64) DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmcontactsrotation"

dataawsssmcontactsrotation.NewDataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">HandOffTime</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings">DataAwsSsmcontactsRotationRecurrenceWeeklySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HandOffTime`<sup>Required</sup> <a name="HandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```go
func HandOffTime() DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmcontactsRotationRecurrenceWeeklySettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings">DataAwsSsmcontactsRotationRecurrenceWeeklySettings</a>

---



