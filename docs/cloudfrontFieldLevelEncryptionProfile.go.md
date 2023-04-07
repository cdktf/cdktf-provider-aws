# `cloudfrontFieldLevelEncryptionProfile` Submodule <a name="`cloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionProfile <a name="CloudfrontFieldLevelEncryptionProfile" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.NewCloudfrontFieldLevelEncryptionProfile(scope Construct, id *string, config CloudfrontFieldLevelEncryptionProfileConfig) CloudfrontFieldLevelEncryptionProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities">PutEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionEntities` <a name="PutEncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities"></a>

```go
func PutEncryptionEntities(value CloudfrontFieldLevelEncryptionProfileEncryptionEntities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.callerReference">CallerReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntities">EncryptionEntities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntitiesInput">EncryptionEntitiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.callerReference"></a>

```go
func CallerReference() *string
```

- *Type:* *string

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntities"></a>

```go
func EncryptionEntities() CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EncryptionEntitiesInput`<sup>Optional</sup> <a name="EncryptionEntitiesInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntitiesInput"></a>

```go
func EncryptionEntitiesInput() CloudfrontFieldLevelEncryptionProfileEncryptionEntities
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

&cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfileConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EncryptionEntities: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities,
	Name: *string,
	Comment: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.encryptionEntities">EncryptionEntities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | encryption_entities block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.encryptionEntities"></a>

```go
EncryptionEntities CloudfrontFieldLevelEncryptionProfileEncryptionEntities
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

encryption_entities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntities <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

&cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

&cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems {
	FieldPatterns: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns,
	ProviderId: *string,
	PublicKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.fieldPatterns">FieldPatterns</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | field_patterns block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.providerId">ProviderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.publicKeyId">PublicKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}. |

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.fieldPatterns"></a>

```go
FieldPatterns CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

field_patterns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}.

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.publicKeyId"></a>

```go
PublicKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}.

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

&cloudfrontfieldlevelencryptionprofile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.NewCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.NewCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get"></a>

```go
func Get(index *f64) CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.NewCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns">PutFieldPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPatterns` <a name="PutFieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns"></a>

```go
func PutFieldPatterns(value CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatterns">FieldPatterns</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatternsInput">FieldPatternsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyIdInput">PublicKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyId">PublicKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatterns"></a>

```go
func FieldPatterns() CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference</a>

---

##### `FieldPatternsInput`<sup>Optional</sup> <a name="FieldPatternsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatternsInput"></a>

```go
func FieldPatternsInput() CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `PublicKeyIdInput`<sup>Optional</sup> <a name="PublicKeyIdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyIdInput"></a>

```go
func PublicKeyIdInput() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyId"></a>

```go
func PublicKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionprofile"

cloudfrontfieldlevelencryptionprofile.NewCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.items"></a>

```go
func Items() CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontFieldLevelEncryptionProfileEncryptionEntities
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---



