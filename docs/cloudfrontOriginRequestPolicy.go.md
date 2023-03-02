# `cloudfrontOriginRequestPolicy` Submodule <a name="`cloudfrontOriginRequestPolicy` Submodule" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginRequestPolicy <a name="CloudfrontOriginRequestPolicy" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicy(scope Construct, id *string, config CloudfrontOriginRequestPolicyConfig) CloudfrontOriginRequestPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig">PutCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig">PutHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig">PutQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCookiesConfig` <a name="PutCookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig"></a>

```go
func PutCookiesConfig(value CloudfrontOriginRequestPolicyCookiesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---

##### `PutHeadersConfig` <a name="PutHeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig"></a>

```go
func PutHeadersConfig(value CloudfrontOriginRequestPolicyHeadersConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---

##### `PutQueryStringsConfig` <a name="PutQueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig"></a>

```go
func PutQueryStringsConfig(value CloudfrontOriginRequestPolicyQueryStringsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference">CloudfrontOriginRequestPolicyCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference">CloudfrontOriginRequestPolicyHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfigInput">CookiesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfigInput">HeadersConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfigInput">QueryStringsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfig"></a>

```go
func CookiesConfig() CloudfrontOriginRequestPolicyCookiesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference">CloudfrontOriginRequestPolicyCookiesConfigOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfig"></a>

```go
func HeadersConfig() CloudfrontOriginRequestPolicyHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference">CloudfrontOriginRequestPolicyHeadersConfigOutputReference</a>

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfig"></a>

```go
func QueryStringsConfig() CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CookiesConfigInput`<sup>Optional</sup> <a name="CookiesConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfigInput"></a>

```go
func CookiesConfigInput() CloudfrontOriginRequestPolicyCookiesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---

##### `HeadersConfigInput`<sup>Optional</sup> <a name="HeadersConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfigInput"></a>

```go
func HeadersConfigInput() CloudfrontOriginRequestPolicyHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryStringsConfigInput`<sup>Optional</sup> <a name="QueryStringsConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfigInput"></a>

```go
func QueryStringsConfigInput() CloudfrontOriginRequestPolicyQueryStringsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginRequestPolicyConfig <a name="CloudfrontOriginRequestPolicyConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CookiesConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig,
	HeadersConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig,
	Name: *string,
	QueryStringsConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig,
	Comment: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | cookies_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | query_strings_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.cookiesConfig"></a>

```go
CookiesConfig CloudfrontOriginRequestPolicyCookiesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

cookies_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.headersConfig"></a>

```go
HeadersConfig CloudfrontOriginRequestPolicyHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}.

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.queryStringsConfig"></a>

```go
QueryStringsConfig CloudfrontOriginRequestPolicyQueryStringsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

query_strings_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontOriginRequestPolicyCookiesConfig <a name="CloudfrontOriginRequestPolicyCookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyCookiesConfig {
	CookieBehavior: *string,
	Cookies: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookieBehavior">CookieBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | cookies block. |

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookieBehavior"></a>

```go
CookieBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}.

---

##### `Cookies`<sup>Optional</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookies"></a>

```go
Cookies CloudfrontOriginRequestPolicyCookiesConfigCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}

---

### CloudfrontOriginRequestPolicyCookiesConfigCookies <a name="CloudfrontOriginRequestPolicyCookiesConfigCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

### CloudfrontOriginRequestPolicyHeadersConfig <a name="CloudfrontOriginRequestPolicyHeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyHeadersConfig {
	HeaderBehavior: *string,
	Headers: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headerBehavior">HeaderBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | headers block. |

---

##### `HeaderBehavior`<sup>Optional</sup> <a name="HeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headerBehavior"></a>

```go
HeaderBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headers"></a>

```go
Headers CloudfrontOriginRequestPolicyHeadersConfigHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}

---

### CloudfrontOriginRequestPolicyHeadersConfigHeaders <a name="CloudfrontOriginRequestPolicyHeadersConfigHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

### CloudfrontOriginRequestPolicyQueryStringsConfig <a name="CloudfrontOriginRequestPolicyQueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyQueryStringsConfig {
	QueryStringBehavior: *string,
	QueryStrings: github.com/cdktf/cdktf-provider-aws-go/aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStrings">QueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | query_strings block. |

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStringBehavior"></a>

```go
QueryStringBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}.

---

##### `QueryStrings`<sup>Optional</sup> <a name="QueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStrings"></a>

```go
QueryStrings CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

query_strings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}

---

### CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings <a name="CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

&cloudfrontoriginrequestpolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference <a name="CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontOriginRequestPolicyCookiesConfigCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---


### CloudfrontOriginRequestPolicyCookiesConfigOutputReference <a name="CloudfrontOriginRequestPolicyCookiesConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicyCookiesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontOriginRequestPolicyCookiesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies">PutCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resetCookies">ResetCookies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookies` <a name="PutCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies"></a>

```go
func PutCookies(value CloudfrontOriginRequestPolicyCookiesConfigCookies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---

##### `ResetCookies` <a name="ResetCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resetCookies"></a>

```go
func ResetCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference">CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehaviorInput">CookieBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookiesInput">CookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior">CookieBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies"></a>

```go
func Cookies() CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference">CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference</a>

---

##### `CookieBehaviorInput`<sup>Optional</sup> <a name="CookieBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehaviorInput"></a>

```go
func CookieBehaviorInput() *string
```

- *Type:* *string

---

##### `CookiesInput`<sup>Optional</sup> <a name="CookiesInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookiesInput"></a>

```go
func CookiesInput() CloudfrontOriginRequestPolicyCookiesConfigCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior"></a>

```go
func CookieBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontOriginRequestPolicyCookiesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---


### CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference <a name="CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontOriginRequestPolicyHeadersConfigHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---


### CloudfrontOriginRequestPolicyHeadersConfigOutputReference <a name="CloudfrontOriginRequestPolicyHeadersConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicyHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontOriginRequestPolicyHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaderBehavior">ResetHeaderBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders"></a>

```go
func PutHeaders(value CloudfrontOriginRequestPolicyHeadersConfigHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---

##### `ResetHeaderBehavior` <a name="ResetHeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaderBehavior"></a>

```go
func ResetHeaderBehavior()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference">CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehaviorInput">HeaderBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headersInput">HeadersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior">HeaderBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers"></a>

```go
func Headers() CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference">CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference</a>

---

##### `HeaderBehaviorInput`<sup>Optional</sup> <a name="HeaderBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehaviorInput"></a>

```go
func HeaderBehaviorInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headersInput"></a>

```go
func HeadersInput() CloudfrontOriginRequestPolicyHeadersConfigHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---

##### `HeaderBehavior`<sup>Required</sup> <a name="HeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior"></a>

```go
func HeaderBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontOriginRequestPolicyHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---


### CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference <a name="CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings">PutQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resetQueryStrings">ResetQueryStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryStrings` <a name="PutQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings"></a>

```go
func PutQueryStrings(value CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---

##### `ResetQueryStrings` <a name="ResetQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resetQueryStrings"></a>

```go
func ResetQueryStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings">QueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehaviorInput">QueryStringBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringsInput">QueryStringsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings"></a>

```go
func QueryStrings() CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference</a>

---

##### `QueryStringBehaviorInput`<sup>Optional</sup> <a name="QueryStringBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehaviorInput"></a>

```go
func QueryStringBehaviorInput() *string
```

- *Type:* *string

---

##### `QueryStringsInput`<sup>Optional</sup> <a name="QueryStringsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringsInput"></a>

```go
func QueryStringsInput() CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```go
func QueryStringBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontOriginRequestPolicyQueryStringsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---


### CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference <a name="CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudfrontoriginrequestpolicy"

cloudfrontoriginrequestpolicy.NewCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---



