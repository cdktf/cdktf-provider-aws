# `dataAwsApiGatewayAuthorizer` Submodule <a name="`dataAwsApiGatewayAuthorizer` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayAuthorizer <a name="DataAwsApiGatewayAuthorizer" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer aws_api_gateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayauthorizer"

dataawsapigatewayauthorizer.NewDataAwsApiGatewayAuthorizer(scope Construct, id *string, config DataAwsApiGatewayAuthorizerConfig) DataAwsApiGatewayAuthorizer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig">DataAwsApiGatewayAuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig">DataAwsApiGatewayAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsApiGatewayAuthorizer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayauthorizer"

dataawsapigatewayauthorizer.DataAwsApiGatewayAuthorizer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayauthorizer"

dataawsapigatewayauthorizer.DataAwsApiGatewayAuthorizer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayauthorizer"

dataawsapigatewayauthorizer.DataAwsApiGatewayAuthorizer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayauthorizer"

dataawsapigatewayauthorizer.DataAwsApiGatewayAuthorizer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsApiGatewayAuthorizer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsApiGatewayAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsApiGatewayAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApiGatewayAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerCredentials">AuthorizerCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.identitySource">IdentitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.providerArns">ProviderArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthorizerCredentials`<sup>Required</sup> <a name="AuthorizerCredentials" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerCredentials"></a>

```go
func AuthorizerCredentials() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `IdentitySource`<sup>Required</sup> <a name="IdentitySource" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.identitySource"></a>

```go
func IdentitySource() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderArns`<sup>Required</sup> <a name="ProviderArns" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.providerArns"></a>

```go
func ProviderArns() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayAuthorizerConfig <a name="DataAwsApiGatewayAuthorizerConfig" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayauthorizer"

&dataawsapigatewayauthorizer.DataAwsApiGatewayAuthorizerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizerId: *string,
	RestApiId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#authorizer_id DataAwsApiGatewayAuthorizer#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#rest_api_id DataAwsApiGatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#id DataAwsApiGatewayAuthorizer#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#authorizer_id DataAwsApiGatewayAuthorizer#authorizer_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#rest_api_id DataAwsApiGatewayAuthorizer#rest_api_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizer.DataAwsApiGatewayAuthorizerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/api_gateway_authorizer#id DataAwsApiGatewayAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



