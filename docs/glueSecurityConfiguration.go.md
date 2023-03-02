# `glueSecurityConfiguration` Submodule <a name="`glueSecurityConfiguration` Submodule" id="@cdktf/provider-aws.glueSecurityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSecurityConfiguration <a name="GlueSecurityConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration aws_glue_security_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.NewGlueSecurityConfiguration(scope Construct, id *string, config GlueSecurityConfigurationConfig) GlueSecurityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig">GlueSecurityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig">GlueSecurityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value GlueSecurityConfigurationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.GlueSecurityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.GlueSecurityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.GlueSecurityConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference">GlueSecurityConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() GlueSecurityConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference">GlueSecurityConfigurationEncryptionConfigurationOutputReference</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() GlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSecurityConfigurationConfig <a name="GlueSecurityConfigurationConfig" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

&gluesecurityconfiguration.GlueSecurityConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EncryptionConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration,
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration GlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GlueSecurityConfigurationEncryptionConfiguration <a name="GlueSecurityConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

&gluesecurityconfiguration.GlueSecurityConfigurationEncryptionConfiguration {
	CloudwatchEncryption: github.com/cdktf/cdktf-provider-aws-go/aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption,
	JobBookmarksEncryption: github.com/cdktf/cdktf-provider-aws-go/aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption,
	S3Encryption: github.com/cdktf/cdktf-provider-aws-go/aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.cloudwatchEncryption">CloudwatchEncryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | cloudwatch_encryption block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption">JobBookmarksEncryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | job_bookmarks_encryption block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a></code> | s3_encryption block. |

---

##### `CloudwatchEncryption`<sup>Required</sup> <a name="CloudwatchEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.cloudwatchEncryption"></a>

```go
CloudwatchEncryption GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

cloudwatch_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}

---

##### `JobBookmarksEncryption`<sup>Required</sup> <a name="JobBookmarksEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption"></a>

```go
JobBookmarksEncryption GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

job_bookmarks_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.s3Encryption"></a>

```go
S3Encryption GlueSecurityConfigurationEncryptionConfigurationS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

s3_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption GlueSecurityConfiguration#s3_encryption}

---

### GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption <a name="GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

&gluesecurityconfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
	CloudwatchEncryptionMode: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.cloudwatchEncryptionMode">CloudwatchEncryptionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |

---

##### `CloudwatchEncryptionMode`<sup>Optional</sup> <a name="CloudwatchEncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.cloudwatchEncryptionMode"></a>

```go
CloudwatchEncryptionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

### GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

&gluesecurityconfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
	JobBookmarksEncryptionMode: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode">JobBookmarksEncryptionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |

---

##### `JobBookmarksEncryptionMode`<sup>Optional</sup> <a name="JobBookmarksEncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode"></a>

```go
JobBookmarksEncryptionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

### GlueSecurityConfigurationEncryptionConfigurationS3Encryption <a name="GlueSecurityConfigurationEncryptionConfigurationS3Encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

&gluesecurityconfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
	KmsKeyArn: *string,
	S3EncryptionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.s3EncryptionMode">S3EncryptionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

##### `S3EncryptionMode`<sup>Optional</sup> <a name="S3EncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.s3EncryptionMode"></a>

```go
S3EncryptionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.NewGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetCloudwatchEncryptionMode">ResetCloudwatchEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchEncryptionMode` <a name="ResetCloudwatchEncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetCloudwatchEncryptionMode"></a>

```go
func ResetCloudwatchEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionModeInput">CloudwatchEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode">CloudwatchEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchEncryptionModeInput`<sup>Optional</sup> <a name="CloudwatchEncryptionModeInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionModeInput"></a>

```go
func CloudwatchEncryptionModeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `CloudwatchEncryptionMode`<sup>Required</sup> <a name="CloudwatchEncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode"></a>

```go
func CloudwatchEncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---


### GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.NewGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetJobBookmarksEncryptionMode">ResetJobBookmarksEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobBookmarksEncryptionMode` <a name="ResetJobBookmarksEncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetJobBookmarksEncryptionMode"></a>

```go
func ResetJobBookmarksEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionModeInput">JobBookmarksEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode">JobBookmarksEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobBookmarksEncryptionModeInput`<sup>Optional</sup> <a name="JobBookmarksEncryptionModeInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionModeInput"></a>

```go
func JobBookmarksEncryptionModeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `JobBookmarksEncryptionMode`<sup>Required</sup> <a name="JobBookmarksEncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode"></a>

```go
func JobBookmarksEncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---


### GlueSecurityConfigurationEncryptionConfigurationOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.NewGlueSecurityConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueSecurityConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption">PutCloudwatchEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption">PutJobBookmarksEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption">PutS3Encryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchEncryption` <a name="PutCloudwatchEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption"></a>

```go
func PutCloudwatchEncryption(value GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---

##### `PutJobBookmarksEncryption` <a name="PutJobBookmarksEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption"></a>

```go
func PutJobBookmarksEncryption(value GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---

##### `PutS3Encryption` <a name="PutS3Encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption"></a>

```go
func PutS3Encryption(value GlueSecurityConfigurationEncryptionConfigurationS3Encryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption">CloudwatchEncryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption">JobBookmarksEncryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryptionInput">CloudwatchEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryptionInput">JobBookmarksEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3EncryptionInput">S3EncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchEncryption`<sup>Required</sup> <a name="CloudwatchEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption"></a>

```go
func CloudwatchEncryption() GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a>

---

##### `JobBookmarksEncryption`<sup>Required</sup> <a name="JobBookmarksEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption"></a>

```go
func JobBookmarksEncryption() GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a>

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryption"></a>

```go
func S3Encryption() GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference</a>

---

##### `CloudwatchEncryptionInput`<sup>Optional</sup> <a name="CloudwatchEncryptionInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryptionInput"></a>

```go
func CloudwatchEncryptionInput() GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---

##### `JobBookmarksEncryptionInput`<sup>Optional</sup> <a name="JobBookmarksEncryptionInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryptionInput"></a>

```go
func JobBookmarksEncryptionInput() GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---

##### `S3EncryptionInput`<sup>Optional</sup> <a name="S3EncryptionInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3EncryptionInput"></a>

```go
func S3EncryptionInput() GlueSecurityConfigurationEncryptionConfigurationS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---


### GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluesecurityconfiguration"

gluesecurityconfiguration.NewGlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetS3EncryptionMode">ResetS3EncryptionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetS3EncryptionMode` <a name="ResetS3EncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetS3EncryptionMode"></a>

```go
func ResetS3EncryptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionModeInput">S3EncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionMode">S3EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `S3EncryptionModeInput`<sup>Optional</sup> <a name="S3EncryptionModeInput" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionModeInput"></a>

```go
func S3EncryptionModeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `S3EncryptionMode`<sup>Required</sup> <a name="S3EncryptionMode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionMode"></a>

```go
func S3EncryptionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueSecurityConfigurationEncryptionConfigurationS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

---



