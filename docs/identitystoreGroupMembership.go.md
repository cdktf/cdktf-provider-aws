# `identitystoreGroupMembership` Submodule <a name="`identitystoreGroupMembership` Submodule" id="@cdktf/provider-aws.identitystoreGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreGroupMembership <a name="IdentitystoreGroupMembership" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership aws_identitystore_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/identitystoregroupmembership"

identitystoregroupmembership.NewIdentitystoreGroupMembership(scope Construct, id *string, config IdentitystoreGroupMembershipConfig) IdentitystoreGroupMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig">IdentitystoreGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig">IdentitystoreGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/identitystoregroupmembership"

identitystoregroupmembership.IdentitystoreGroupMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/identitystoregroupmembership"

identitystoregroupmembership.IdentitystoreGroupMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/identitystoregroupmembership"

identitystoregroupmembership.IdentitystoreGroupMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId">MembershipId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput">MemberIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId"></a>

```go
func MembershipId() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput"></a>

```go
func IdentityStoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberIdInput`<sup>Optional</sup> <a name="MemberIdInput" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput"></a>

```go
func MemberIdInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreGroupMembershipConfig <a name="IdentitystoreGroupMembershipConfig" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/identitystoregroupmembership"

&identitystoregroupmembership.IdentitystoreGroupMembershipConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	IdentityStoreId: *string,
	MemberId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId">MemberId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#id IdentitystoreGroupMembership#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}.

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId"></a>

```go
IdentityStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}.

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId"></a>

```go
MemberId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#id IdentitystoreGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



