# `opensearchDomainSamlOptions` Submodule <a name="`opensearchDomainSamlOptions` Submodule" id="@cdktf/provider-aws.opensearchDomainSamlOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomainSamlOptions <a name="OpensearchDomainSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options aws_opensearch_domain_saml_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.NewOpensearchDomainSamlOptions(scope Construct, id *string, config OpensearchDomainSamlOptionsConfig) OpensearchDomainSamlOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig">OpensearchDomainSamlOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig">OpensearchDomainSamlOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions">PutSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetSamlOptions">ResetSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSamlOptions` <a name="PutSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions"></a>

```go
func PutSamlOptions(value OpensearchDomainSamlOptionsSamlOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts"></a>

```go
func PutTimeouts(value OpensearchDomainSamlOptionsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetId"></a>

```go
func ResetId()
```

##### `ResetSamlOptions` <a name="ResetSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetSamlOptions"></a>

```go
func ResetSamlOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.OpensearchDomainSamlOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.OpensearchDomainSamlOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.OpensearchDomainSamlOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference">OpensearchDomainSamlOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference">OpensearchDomainSamlOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptionsInput">SamlOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptions"></a>

```go
func SamlOptions() OpensearchDomainSamlOptionsSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference">OpensearchDomainSamlOptionsSamlOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeouts"></a>

```go
func Timeouts() OpensearchDomainSamlOptionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference">OpensearchDomainSamlOptionsTimeoutsOutputReference</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SamlOptionsInput`<sup>Optional</sup> <a name="SamlOptionsInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptionsInput"></a>

```go
func SamlOptionsInput() OpensearchDomainSamlOptionsSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainSamlOptionsConfig <a name="OpensearchDomainSamlOptionsConfig" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

&opensearchdomainsamloptions.OpensearchDomainSamlOptionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Id: *string,
	SamlOptions: github.com/cdktf/cdktf-provider-aws-go/aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SamlOptions`<sup>Optional</sup> <a name="SamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.samlOptions"></a>

```go
SamlOptions OpensearchDomainSamlOptionsSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#saml_options OpensearchDomainSamlOptions#saml_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.timeouts"></a>

```go
Timeouts OpensearchDomainSamlOptionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#timeouts OpensearchDomainSamlOptions#timeouts}

---

### OpensearchDomainSamlOptionsSamlOptions <a name="OpensearchDomainSamlOptionsSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

&opensearchdomainsamloptions.OpensearchDomainSamlOptionsSamlOptions {
	Enabled: interface{},
	Idp: github.com/cdktf/cdktf-provider-aws-go/aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp,
	MasterBackendRole: *string,
	MasterUserName: *string,
	RolesKey: *string,
	SessionTimeoutMinutes: *f64,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.idp">Idp</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | idp block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterBackendRole">MasterBackendRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.rolesKey">RolesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}.

---

##### `Idp`<sup>Optional</sup> <a name="Idp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.idp"></a>

```go
Idp OpensearchDomainSamlOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#idp OpensearchDomainSamlOptions#idp}

---

##### `MasterBackendRole`<sup>Optional</sup> <a name="MasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterBackendRole"></a>

```go
MasterBackendRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterUserName"></a>

```go
MasterUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}.

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```go
SessionTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}.

---

### OpensearchDomainSamlOptionsSamlOptionsIdp <a name="OpensearchDomainSamlOptionsSamlOptionsIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

&opensearchdomainsamloptions.OpensearchDomainSamlOptionsSamlOptionsIdp {
	EntityId: *string,
	MetadataContent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent">MetadataContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}.

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent"></a>

```go
MetadataContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}.

---

### OpensearchDomainSamlOptionsTimeouts <a name="OpensearchDomainSamlOptionsTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

&opensearchdomainsamloptions.OpensearchDomainSamlOptionsTimeouts {
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference <a name="OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.NewOpensearchDomainSamlOptionsSamlOptionsIdpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">MetadataContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent">MetadataContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `MetadataContentInput`<sup>Optional</sup> <a name="MetadataContentInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```go
func MetadataContentInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```go
func MetadataContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainSamlOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---


### OpensearchDomainSamlOptionsSamlOptionsOutputReference <a name="OpensearchDomainSamlOptionsSamlOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.NewOpensearchDomainSamlOptionsSamlOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainSamlOptionsSamlOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp">PutIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp">ResetIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole">ResetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdp` <a name="PutIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp"></a>

```go
func PutIdp(value OpensearchDomainSamlOptionsSamlOptionsIdp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIdp` <a name="ResetIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp"></a>

```go
func ResetIdp()
```

##### `ResetMasterBackendRole` <a name="ResetMasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```go
func ResetMasterBackendRole()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```go
func ResetMasterUserName()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```go
func ResetSessionTimeoutMinutes()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idp">Idp</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference">OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput">IdpInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">MasterBackendRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole">MasterBackendRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Idp`<sup>Required</sup> <a name="Idp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idp"></a>

```go
func Idp() OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference">OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdpInput`<sup>Optional</sup> <a name="IdpInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput"></a>

```go
func IdpInput() OpensearchDomainSamlOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `MasterBackendRoleInput`<sup>Optional</sup> <a name="MasterBackendRoleInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```go
func MasterBackendRoleInput() *string
```

- *Type:* *string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```go
func MasterUserNameInput() *string
```

- *Type:* *string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```go
func SessionTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MasterBackendRole`<sup>Required</sup> <a name="MasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```go
func MasterBackendRole() *string
```

- *Type:* *string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```go
func MasterUserName() *string
```

- *Type:* *string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```go
func SessionTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchDomainSamlOptionsSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---


### OpensearchDomainSamlOptionsTimeoutsOutputReference <a name="OpensearchDomainSamlOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchdomainsamloptions"

opensearchdomainsamloptions.NewOpensearchDomainSamlOptionsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchDomainSamlOptionsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



