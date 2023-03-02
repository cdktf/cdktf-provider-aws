# `organizationsOrganizationalUnit` Submodule <a name="`organizationsOrganizationalUnit` Submodule" id="@cdktf/provider-aws.organizationsOrganizationalUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganizationalUnit <a name="OrganizationsOrganizationalUnit" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit aws_organizations_organizational_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

organizationsorganizationalunit.NewOrganizationsOrganizationalUnit(scope Construct, id *string, config OrganizationsOrganizationalUnitConfig) OrganizationsOrganizationalUnit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig">OrganizationsOrganizationalUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig">OrganizationsOrganizationalUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

organizationsorganizationalunit.OrganizationsOrganizationalUnit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

organizationsorganizationalunit.OrganizationsOrganizationalUnit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

organizationsorganizationalunit.OrganizationsOrganizationalUnit_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList">OrganizationsOrganizationalUnitAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.accounts"></a>

```go
func Accounts() OrganizationsOrganizationalUnitAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList">OrganizationsOrganizationalUnitAccountsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationalUnitAccounts <a name="OrganizationsOrganizationalUnitAccounts" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

&organizationsorganizationalunit.OrganizationsOrganizationalUnitAccounts {

}
```


### OrganizationsOrganizationalUnitConfig <a name="OrganizationsOrganizationalUnitConfig" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

&organizationsorganizationalunit.OrganizationsOrganizationalUnitConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ParentId: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId">ParentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}.

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationalUnitAccountsList <a name="OrganizationsOrganizationalUnitAccountsList" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

organizationsorganizationalunit.NewOrganizationsOrganizationalUnitAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OrganizationsOrganizationalUnitAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get"></a>

```go
func Get(index *f64) OrganizationsOrganizationalUnitAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OrganizationsOrganizationalUnitAccountsOutputReference <a name="OrganizationsOrganizationalUnitAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsorganizationalunit"

organizationsorganizationalunit.NewOrganizationsOrganizationalUnitAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OrganizationsOrganizationalUnitAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts">OrganizationsOrganizationalUnitAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationsOrganizationalUnitAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts">OrganizationsOrganizationalUnitAccounts</a>

---



