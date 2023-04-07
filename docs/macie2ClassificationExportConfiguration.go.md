# `macie2ClassificationExportConfiguration` Submodule <a name="`macie2ClassificationExportConfiguration` Submodule" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationExportConfiguration <a name="Macie2ClassificationExportConfiguration" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration aws_macie2_classification_export_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

macie2classificationexportconfiguration.NewMacie2ClassificationExportConfiguration(scope Construct, id *string, config Macie2ClassificationExportConfigurationConfig) Macie2ClassificationExportConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig">Macie2ClassificationExportConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig">Macie2ClassificationExportConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination"></a>

```go
func PutS3Destination(value Macie2ClassificationExportConfigurationS3Destination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination"></a>

```go
func ResetS3Destination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

macie2classificationexportconfiguration.Macie2ClassificationExportConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

macie2classificationexportconfiguration.Macie2ClassificationExportConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

macie2classificationexportconfiguration.Macie2ClassificationExportConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput">S3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination"></a>

```go
func S3Destination() Macie2ClassificationExportConfigurationS3DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput"></a>

```go
func S3DestinationInput() Macie2ClassificationExportConfigurationS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationExportConfigurationConfig <a name="Macie2ClassificationExportConfigurationConfig" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

&macie2classificationexportconfiguration.Macie2ClassificationExportConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	S3Destination: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination"></a>

```go
S3Destination Macie2ClassificationExportConfigurationS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

### Macie2ClassificationExportConfigurationS3Destination <a name="Macie2ClassificationExportConfigurationS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

&macie2classificationexportconfiguration.Macie2ClassificationExportConfigurationS3Destination {
	BucketName: *string,
	KmsKeyArn: *string,
	KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}.

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationExportConfigurationS3DestinationOutputReference <a name="Macie2ClassificationExportConfigurationS3DestinationOutputReference" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationexportconfiguration"

macie2classificationexportconfiguration.NewMacie2ClassificationExportConfigurationS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationExportConfigurationS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix"></a>

```go
func ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationExportConfigurationS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---



