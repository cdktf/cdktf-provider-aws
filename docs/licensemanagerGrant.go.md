# `licensemanagerGrant` Submodule <a name="`licensemanagerGrant` Submodule" id="@cdktf/provider-aws.licensemanagerGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerGrant <a name="LicensemanagerGrant" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant aws_licensemanager_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/licensemanagergrant"

licensemanagergrant.NewLicensemanagerGrant(scope Construct, id *string, config LicensemanagerGrantConfig) LicensemanagerGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig">LicensemanagerGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig">LicensemanagerGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/licensemanagergrant"

licensemanagergrant.LicensemanagerGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/licensemanagergrant"

licensemanagergrant.LicensemanagerGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/licensemanagergrant"

licensemanagergrant.LicensemanagerGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.parentArn">ParentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperationsInput">AllowedOperationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArnInput">LicenseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperations">AllowedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArn">LicenseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `ParentArn`<sup>Required</sup> <a name="ParentArn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.parentArn"></a>

```go
func ParentArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AllowedOperationsInput`<sup>Optional</sup> <a name="AllowedOperationsInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperationsInput"></a>

```go
func AllowedOperationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseArnInput`<sup>Optional</sup> <a name="LicenseArnInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArnInput"></a>

```go
func LicenseArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `AllowedOperations`<sup>Required</sup> <a name="AllowedOperations" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.allowedOperations"></a>

```go
func AllowedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.licenseArn"></a>

```go
func LicenseArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerGrantConfig <a name="LicensemanagerGrantConfig" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/licensemanagergrant"

&licensemanagergrant.LicensemanagerGrantConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedOperations: *[]*string,
	LicenseArn: *string,
	Name: *string,
	Principal: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.allowedOperations">AllowedOperations</a></code> | <code>*[]*string</code> | Allowed operations for the grant. This is a subset of the allowed operations on the license. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.licenseArn">LicenseArn</a></code> | <code>*string</code> | License ARN. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.name">Name</a></code> | <code>*string</code> | Name of the grant. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.principal">Principal</a></code> | <code>*string</code> | The grantee principal ARN. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant#id LicensemanagerGrant#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedOperations`<sup>Required</sup> <a name="AllowedOperations" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.allowedOperations"></a>

```go
AllowedOperations *[]*string
```

- *Type:* *[]*string

Allowed operations for the grant. This is a subset of the allowed operations on the license.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant#allowed_operations LicensemanagerGrant#allowed_operations}

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.licenseArn"></a>

```go
LicenseArn *string
```

- *Type:* *string

License ARN.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant#license_arn LicensemanagerGrant#license_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the grant.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant#name LicensemanagerGrant#name}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

The grantee principal ARN.

The target account for the grant in the form of the ARN for an account principal of the root user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant#principal LicensemanagerGrant#principal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerGrant.LicensemanagerGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant#id LicensemanagerGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



