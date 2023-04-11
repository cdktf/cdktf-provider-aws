# `cloudfrontFieldLevelEncryptionConfig` Submodule <a name="`cloudfrontFieldLevelEncryptionConfig` Submodule" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionConfig <a name="CloudfrontFieldLevelEncryptionConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfig(scope Construct, id *string, config CloudfrontFieldLevelEncryptionConfigConfig) CloudfrontFieldLevelEncryptionConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig">CloudfrontFieldLevelEncryptionConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig">CloudfrontFieldLevelEncryptionConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putContentTypeProfileConfig">PutContentTypeProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putQueryArgProfileConfig">PutQueryArgProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutContentTypeProfileConfig` <a name="PutContentTypeProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putContentTypeProfileConfig"></a>

```go
func PutContentTypeProfileConfig(value CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putContentTypeProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---

##### `PutQueryArgProfileConfig` <a name="PutQueryArgProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putQueryArgProfileConfig"></a>

```go
func PutQueryArgProfileConfig(value CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putQueryArgProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.callerReference">CallerReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfig">ContentTypeProfileConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfig">QueryArgProfileConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfigInput">ContentTypeProfileConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfigInput">QueryArgProfileConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.callerReference"></a>

```go
func CallerReference() *string
```

- *Type:* *string

---

##### `ContentTypeProfileConfig`<sup>Required</sup> <a name="ContentTypeProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfig"></a>

```go
func ContentTypeProfileConfig() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `QueryArgProfileConfig`<sup>Required</sup> <a name="QueryArgProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfig"></a>

```go
func QueryArgProfileConfig() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ContentTypeProfileConfigInput`<sup>Optional</sup> <a name="ContentTypeProfileConfigInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfigInput"></a>

```go
func ContentTypeProfileConfigInput() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueryArgProfileConfigInput`<sup>Optional</sup> <a name="QueryArgProfileConfigInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfigInput"></a>

```go
func QueryArgProfileConfigInput() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionConfigConfig <a name="CloudfrontFieldLevelEncryptionConfigConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContentTypeProfileConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig,
	QueryArgProfileConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig,
	Comment: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.contentTypeProfileConfig">ContentTypeProfileConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | content_type_profile_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.queryArgProfileConfig">QueryArgProfileConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | query_arg_profile_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentTypeProfileConfig`<sup>Required</sup> <a name="ContentTypeProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.contentTypeProfileConfig"></a>

```go
ContentTypeProfileConfig CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

content_type_profile_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}

---

##### `QueryArgProfileConfig`<sup>Required</sup> <a name="QueryArgProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.queryArgProfileConfig"></a>

```go
QueryArgProfileConfig CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

query_arg_profile_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig {
	ContentTypeProfiles: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles,
	ForwardWhenContentTypeIsUnknown: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.contentTypeProfiles">ContentTypeProfiles</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | content_type_profiles block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.forwardWhenContentTypeIsUnknown">ForwardWhenContentTypeIsUnknown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}. |

---

##### `ContentTypeProfiles`<sup>Required</sup> <a name="ContentTypeProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.contentTypeProfiles"></a>

```go
ContentTypeProfiles CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

content_type_profiles block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#content_type_profiles CloudfrontFieldLevelEncryptionConfig#content_type_profiles}

---

##### `ForwardWhenContentTypeIsUnknown`<sup>Required</sup> <a name="ForwardWhenContentTypeIsUnknown" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.forwardWhenContentTypeIsUnknown"></a>

```go
ForwardWhenContentTypeIsUnknown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}.

---

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}

---

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems {
	ContentType: *string,
	Format: *string,
	ProfileId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#content_type CloudfrontFieldLevelEncryptionConfig#content_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#format CloudfrontFieldLevelEncryptionConfig#format}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.profileId">ProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#content_type CloudfrontFieldLevelEncryptionConfig#content_type}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#format CloudfrontFieldLevelEncryptionConfig#format}.

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}.

---

### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig {
	ForwardWhenQueryArgProfileIsUnknown: interface{},
	QueryArgProfiles: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.forwardWhenQueryArgProfileIsUnknown">ForwardWhenQueryArgProfileIsUnknown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.queryArgProfiles">QueryArgProfiles</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | query_arg_profiles block. |

---

##### `ForwardWhenQueryArgProfileIsUnknown`<sup>Required</sup> <a name="ForwardWhenQueryArgProfileIsUnknown" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.forwardWhenQueryArgProfileIsUnknown"></a>

```go
ForwardWhenQueryArgProfileIsUnknown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}.

---

##### `QueryArgProfiles`<sup>Optional</sup> <a name="QueryArgProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.queryArgProfiles"></a>

```go
QueryArgProfiles CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

query_arg_profiles block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#query_arg_profiles CloudfrontFieldLevelEncryptionConfig#query_arg_profiles}

---

### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}

---

### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

&cloudfrontfieldlevelencryptionconfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems {
	ProfileId: *string,
	QueryArg: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.profileId">ProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.queryArg">QueryArg</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}. |

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}.

---

##### `QueryArg`<sup>Required</sup> <a name="QueryArg" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.queryArg"></a>

```go
QueryArg *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.get"></a>

```go
func Get(index *f64) CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resetProfileId"></a>

```go
func ResetProfileId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.items"></a>

```go
func Items() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---


### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.putContentTypeProfiles">PutContentTypeProfiles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentTypeProfiles` <a name="PutContentTypeProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.putContentTypeProfiles"></a>

```go
func PutContentTypeProfiles(value CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.putContentTypeProfiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfiles">ContentTypeProfiles</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfilesInput">ContentTypeProfilesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknownInput">ForwardWhenContentTypeIsUnknownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknown">ForwardWhenContentTypeIsUnknown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeProfiles`<sup>Required</sup> <a name="ContentTypeProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfiles"></a>

```go
func ContentTypeProfiles() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference</a>

---

##### `ContentTypeProfilesInput`<sup>Optional</sup> <a name="ContentTypeProfilesInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfilesInput"></a>

```go
func ContentTypeProfilesInput() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---

##### `ForwardWhenContentTypeIsUnknownInput`<sup>Optional</sup> <a name="ForwardWhenContentTypeIsUnknownInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknownInput"></a>

```go
func ForwardWhenContentTypeIsUnknownInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardWhenContentTypeIsUnknown`<sup>Required</sup> <a name="ForwardWhenContentTypeIsUnknown" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknown"></a>

```go
func ForwardWhenContentTypeIsUnknown() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.putQueryArgProfiles">PutQueryArgProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resetQueryArgProfiles">ResetQueryArgProfiles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryArgProfiles` <a name="PutQueryArgProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.putQueryArgProfiles"></a>

```go
func PutQueryArgProfiles(value CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.putQueryArgProfiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---

##### `ResetQueryArgProfiles` <a name="ResetQueryArgProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resetQueryArgProfiles"></a>

```go
func ResetQueryArgProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfiles">QueryArgProfiles</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknownInput">ForwardWhenQueryArgProfileIsUnknownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfilesInput">QueryArgProfilesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknown">ForwardWhenQueryArgProfileIsUnknown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryArgProfiles`<sup>Required</sup> <a name="QueryArgProfiles" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfiles"></a>

```go
func QueryArgProfiles() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference</a>

---

##### `ForwardWhenQueryArgProfileIsUnknownInput`<sup>Optional</sup> <a name="ForwardWhenQueryArgProfileIsUnknownInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknownInput"></a>

```go
func ForwardWhenQueryArgProfileIsUnknownInput() interface{}
```

- *Type:* interface{}

---

##### `QueryArgProfilesInput`<sup>Optional</sup> <a name="QueryArgProfilesInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfilesInput"></a>

```go
func QueryArgProfilesInput() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---

##### `ForwardWhenQueryArgProfileIsUnknown`<sup>Required</sup> <a name="ForwardWhenQueryArgProfileIsUnknown" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknown"></a>

```go
func ForwardWhenQueryArgProfileIsUnknown() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.get"></a>

```go
func Get(index *f64) CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArgInput">QueryArgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArg">QueryArg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `QueryArgInput`<sup>Optional</sup> <a name="QueryArgInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArgInput"></a>

```go
func QueryArgInput() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `QueryArg`<sup>Required</sup> <a name="QueryArg" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArg"></a>

```go
func QueryArg() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontfieldlevelencryptionconfig"

cloudfrontfieldlevelencryptionconfig.NewCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.items"></a>

```go
func Items() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---



