# `cloudsearchDomain` Submodule <a name="`cloudsearchDomain` Submodule" id="@cdktf/provider-aws.cloudsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomain <a name="CloudsearchDomain" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain aws_cloudsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.NewCloudsearchDomain(scope Construct, id *string, config CloudsearchDomainConfig) CloudsearchDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig">CloudsearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig">CloudsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions">PutEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField">PutIndexField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters">PutScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions">ResetEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetIndexField">ResetIndexField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetScalingParameters">ResetScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEndpointOptions` <a name="PutEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions"></a>

```go
func PutEndpointOptions(value CloudsearchDomainEndpointOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `PutIndexField` <a name="PutIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField"></a>

```go
func PutIndexField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScalingParameters` <a name="PutScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters"></a>

```go
func PutScalingParameters(value CloudsearchDomainScalingParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts"></a>

```go
func PutTimeouts(value CloudsearchDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

---

##### `ResetEndpointOptions` <a name="ResetEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions"></a>

```go
func ResetEndpointOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexField` <a name="ResetIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetIndexField"></a>

```go
func ResetIndexField()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetScalingParameters` <a name="ResetScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetScalingParameters"></a>

```go
func ResetScalingParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.CloudsearchDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.CloudsearchDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.CloudsearchDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint">DocumentServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptions">EndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexField">IndexField</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParameters">ScalingParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint">SearchServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput">EndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput">IndexFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput">ScalingParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DocumentServiceEndpoint`<sup>Required</sup> <a name="DocumentServiceEndpoint" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint"></a>

```go
func DocumentServiceEndpoint() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EndpointOptions`<sup>Required</sup> <a name="EndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptions"></a>

```go
func EndpointOptions() CloudsearchDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a>

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexField"></a>

```go
func IndexField() CloudsearchDomainIndexFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a>

---

##### `ScalingParameters`<sup>Required</sup> <a name="ScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParameters"></a>

```go
func ScalingParameters() CloudsearchDomainScalingParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a>

---

##### `SearchServiceEndpoint`<sup>Required</sup> <a name="SearchServiceEndpoint" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint"></a>

```go
func SearchServiceEndpoint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeouts"></a>

```go
func Timeouts() CloudsearchDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a>

---

##### `EndpointOptionsInput`<sup>Optional</sup> <a name="EndpointOptionsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput"></a>

```go
func EndpointOptionsInput() CloudsearchDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexFieldInput`<sup>Optional</sup> <a name="IndexFieldInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput"></a>

```go
func IndexFieldInput() interface{}
```

- *Type:* interface{}

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScalingParametersInput`<sup>Optional</sup> <a name="ScalingParametersInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput"></a>

```go
func ScalingParametersInput() CloudsearchDomainScalingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAz"></a>

```go
func MultiAz() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainConfig <a name="CloudsearchDomainConfig" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

&cloudsearchdomain.CloudsearchDomainConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EndpointOptions: github.com/cdktf/cdktf-provider-aws-go/aws.cloudsearchDomain.CloudsearchDomainEndpointOptions,
	Id: *string,
	IndexField: interface{},
	MultiAz: interface{},
	ScalingParameters: github.com/cdktf/cdktf-provider-aws-go/aws.cloudsearchDomain.CloudsearchDomainScalingParameters,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.cloudsearchDomain.CloudsearchDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions">EndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.indexField">IndexField</a></code> | <code>interface{}</code> | index_field block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters">ScalingParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | scaling_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `EndpointOptions`<sup>Optional</sup> <a name="EndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions"></a>

```go
EndpointOptions CloudsearchDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexField`<sup>Optional</sup> <a name="IndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.indexField"></a>

```go
IndexField interface{}
```

- *Type:* interface{}

index_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#index_field CloudsearchDomain#index_field}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz"></a>

```go
MultiAz interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}.

---

##### `ScalingParameters`<sup>Optional</sup> <a name="ScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters"></a>

```go
ScalingParameters CloudsearchDomainScalingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

scaling_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts"></a>

```go
Timeouts CloudsearchDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}

---

### CloudsearchDomainEndpointOptions <a name="CloudsearchDomainEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

&cloudsearchdomain.CloudsearchDomainEndpointOptions {
	EnforceHttps: interface{},
	TlsSecurityPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps">EnforceHttps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}. |

---

##### `EnforceHttps`<sup>Optional</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps"></a>

```go
EnforceHttps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}.

---

##### `TlsSecurityPolicy`<sup>Optional</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```go
TlsSecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}.

---

### CloudsearchDomainIndexField <a name="CloudsearchDomainIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

&cloudsearchdomain.CloudsearchDomainIndexField {
	Name: *string,
	Type: *string,
	AnalysisScheme: *string,
	DefaultValue: *string,
	Facet: interface{},
	Highlight: interface{},
	Return: interface{},
	Search: interface{},
	Sort: interface{},
	SourceFields: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme">AnalysisScheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.facet">Facet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight">Highlight</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.return">Return</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.search">Search</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sort">Sort</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sourceFields">SourceFields</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}.

---

##### `AnalysisScheme`<sup>Optional</sup> <a name="AnalysisScheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme"></a>

```go
AnalysisScheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}.

---

##### `Facet`<sup>Optional</sup> <a name="Facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.facet"></a>

```go
Facet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}.

---

##### `Highlight`<sup>Optional</sup> <a name="Highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight"></a>

```go
Highlight interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}.

---

##### `Return`<sup>Optional</sup> <a name="Return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.return"></a>

```go
Return interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}.

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.search"></a>

```go
Search interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sort"></a>

```go
Sort interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}.

---

##### `SourceFields`<sup>Optional</sup> <a name="SourceFields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sourceFields"></a>

```go
SourceFields *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}.

---

### CloudsearchDomainScalingParameters <a name="CloudsearchDomainScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

&cloudsearchdomain.CloudsearchDomainScalingParameters {
	DesiredInstanceType: *string,
	DesiredPartitionCount: *f64,
	DesiredReplicationCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType">DesiredInstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount">DesiredPartitionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount">DesiredReplicationCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}. |

---

##### `DesiredInstanceType`<sup>Optional</sup> <a name="DesiredInstanceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType"></a>

```go
DesiredInstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}.

---

##### `DesiredPartitionCount`<sup>Optional</sup> <a name="DesiredPartitionCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount"></a>

```go
DesiredPartitionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}.

---

##### `DesiredReplicationCount`<sup>Optional</sup> <a name="DesiredReplicationCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount"></a>

```go
DesiredReplicationCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}.

---

### CloudsearchDomainTimeouts <a name="CloudsearchDomainTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

&cloudsearchdomain.CloudsearchDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainEndpointOptionsOutputReference <a name="CloudsearchDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.NewCloudsearchDomainEndpointOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudsearchDomainEndpointOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps">ResetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">ResetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceHttps` <a name="ResetEnforceHttps" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```go
func ResetEnforceHttps()
```

##### `ResetTlsSecurityPolicy` <a name="ResetTlsSecurityPolicy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```go
func ResetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput">EnforceHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">TlsSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceHttpsInput`<sup>Optional</sup> <a name="EnforceHttpsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```go
func EnforceHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsSecurityPolicyInput`<sup>Optional</sup> <a name="TlsSecurityPolicyInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```go
func TlsSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```go
func EnforceHttps() interface{}
```

- *Type:* interface{}

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```go
func TlsSecurityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudsearchDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---


### CloudsearchDomainIndexFieldList <a name="CloudsearchDomainIndexFieldList" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.NewCloudsearchDomainIndexFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudsearchDomainIndexFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get"></a>

```go
func Get(index *f64) CloudsearchDomainIndexFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudsearchDomainIndexFieldOutputReference <a name="CloudsearchDomainIndexFieldOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.NewCloudsearchDomainIndexFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudsearchDomainIndexFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme">ResetAnalysisScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet">ResetFacet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight">ResetHighlight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn">ResetReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort">ResetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSourceFields">ResetSourceFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisScheme` <a name="ResetAnalysisScheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme"></a>

```go
func ResetAnalysisScheme()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetFacet` <a name="ResetFacet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet"></a>

```go
func ResetFacet()
```

##### `ResetHighlight` <a name="ResetHighlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight"></a>

```go
func ResetHighlight()
```

##### `ResetReturn` <a name="ResetReturn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn"></a>

```go
func ResetReturn()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort"></a>

```go
func ResetSort()
```

##### `ResetSourceFields` <a name="ResetSourceFields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSourceFields"></a>

```go
func ResetSourceFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput">AnalysisSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput">FacetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput">HighlightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput">ReturnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput">SearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput">SortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFieldsInput">SourceFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme">AnalysisScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet">Facet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight">Highlight</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return">Return</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search">Search</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort">Sort</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFields">SourceFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalysisSchemeInput`<sup>Optional</sup> <a name="AnalysisSchemeInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput"></a>

```go
func AnalysisSchemeInput() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `FacetInput`<sup>Optional</sup> <a name="FacetInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput"></a>

```go
func FacetInput() interface{}
```

- *Type:* interface{}

---

##### `HighlightInput`<sup>Optional</sup> <a name="HighlightInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput"></a>

```go
func HighlightInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReturnInput`<sup>Optional</sup> <a name="ReturnInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput"></a>

```go
func ReturnInput() interface{}
```

- *Type:* interface{}

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput"></a>

```go
func SearchInput() interface{}
```

- *Type:* interface{}

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput"></a>

```go
func SortInput() interface{}
```

- *Type:* interface{}

---

##### `SourceFieldsInput`<sup>Optional</sup> <a name="SourceFieldsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFieldsInput"></a>

```go
func SourceFieldsInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AnalysisScheme`<sup>Required</sup> <a name="AnalysisScheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme"></a>

```go
func AnalysisScheme() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Facet`<sup>Required</sup> <a name="Facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet"></a>

```go
func Facet() interface{}
```

- *Type:* interface{}

---

##### `Highlight`<sup>Required</sup> <a name="Highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight"></a>

```go
func Highlight() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Return`<sup>Required</sup> <a name="Return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return"></a>

```go
func Return() interface{}
```

- *Type:* interface{}

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search"></a>

```go
func Search() interface{}
```

- *Type:* interface{}

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort"></a>

```go
func Sort() interface{}
```

- *Type:* interface{}

---

##### `SourceFields`<sup>Required</sup> <a name="SourceFields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFields"></a>

```go
func SourceFields() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudsearchDomainScalingParametersOutputReference <a name="CloudsearchDomainScalingParametersOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.NewCloudsearchDomainScalingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudsearchDomainScalingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType">ResetDesiredInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount">ResetDesiredPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount">ResetDesiredReplicationCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDesiredInstanceType` <a name="ResetDesiredInstanceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType"></a>

```go
func ResetDesiredInstanceType()
```

##### `ResetDesiredPartitionCount` <a name="ResetDesiredPartitionCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount"></a>

```go
func ResetDesiredPartitionCount()
```

##### `ResetDesiredReplicationCount` <a name="ResetDesiredReplicationCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount"></a>

```go
func ResetDesiredReplicationCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput">DesiredInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput">DesiredPartitionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput">DesiredReplicationCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType">DesiredInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount">DesiredPartitionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount">DesiredReplicationCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredInstanceTypeInput`<sup>Optional</sup> <a name="DesiredInstanceTypeInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput"></a>

```go
func DesiredInstanceTypeInput() *string
```

- *Type:* *string

---

##### `DesiredPartitionCountInput`<sup>Optional</sup> <a name="DesiredPartitionCountInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput"></a>

```go
func DesiredPartitionCountInput() *f64
```

- *Type:* *f64

---

##### `DesiredReplicationCountInput`<sup>Optional</sup> <a name="DesiredReplicationCountInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput"></a>

```go
func DesiredReplicationCountInput() *f64
```

- *Type:* *f64

---

##### `DesiredInstanceType`<sup>Required</sup> <a name="DesiredInstanceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType"></a>

```go
func DesiredInstanceType() *string
```

- *Type:* *string

---

##### `DesiredPartitionCount`<sup>Required</sup> <a name="DesiredPartitionCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount"></a>

```go
func DesiredPartitionCount() *f64
```

- *Type:* *f64

---

##### `DesiredReplicationCount`<sup>Required</sup> <a name="DesiredReplicationCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount"></a>

```go
func DesiredReplicationCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudsearchDomainScalingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---


### CloudsearchDomainTimeoutsOutputReference <a name="CloudsearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudsearchdomain"

cloudsearchdomain.NewCloudsearchDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudsearchDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



