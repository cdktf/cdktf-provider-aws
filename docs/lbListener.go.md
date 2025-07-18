# `lbListener` Submodule <a name="`lbListener` Submodule" id="@cdktf/provider-aws.lbListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListener <a name="LbListener" id="@cdktf/provider-aws.lbListener.LbListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener aws_lb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListener(scope Construct, id *string, config LbListenerConfig) LbListener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig">LbListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerConfig">LbListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putDefaultAction">PutDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putMutualAuthentication">PutMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetAlpnPolicy">ResetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetMutualAuthentication">ResetMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName">ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName">ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznTlsVersionHeaderName">ResetRoutingHttpRequestXAmznTlsVersionHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue">ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue">ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue">ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowOriginHeaderValue">ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue">ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlMaxAgeHeaderValue">ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseContentSecurityPolicyHeaderValue">ResetRoutingHttpResponseContentSecurityPolicyHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseServerEnabled">ResetRoutingHttpResponseServerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseStrictTransportSecurityHeaderValue">ResetRoutingHttpResponseStrictTransportSecurityHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseXContentTypeOptionsHeaderValue">ResetRoutingHttpResponseXContentTypeOptionsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseXFrameOptionsHeaderValue">ResetRoutingHttpResponseXFrameOptionsHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTcpIdleTimeoutSeconds">ResetTcpIdleTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbListener.LbListener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lbListener.LbListener.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbListener.LbListener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbListener.LbListener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lbListener.LbListener.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbListener.LbListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lbListener.LbListener.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lbListener.LbListener.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListener.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lbListener.LbListener.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lbListener.LbListener.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbListener.LbListener.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListener.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lbListener.LbListener.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultAction` <a name="PutDefaultAction" id="@cdktf/provider-aws.lbListener.LbListener.putDefaultAction"></a>

```go
func PutDefaultAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putDefaultAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMutualAuthentication` <a name="PutMutualAuthentication" id="@cdktf/provider-aws.lbListener.LbListener.putMutualAuthentication"></a>

```go
func PutMutualAuthentication(value LbListenerMutualAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lbListener.LbListener.putTimeouts"></a>

```go
func PutTimeouts(value LbListenerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

---

##### `ResetAlpnPolicy` <a name="ResetAlpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.resetAlpnPolicy"></a>

```go
func ResetAlpnPolicy()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktf/provider-aws.lbListener.LbListener.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbListener.LbListener.resetId"></a>

```go
func ResetId()
```

##### `ResetMutualAuthentication` <a name="ResetMutualAuthentication" id="@cdktf/provider-aws.lbListener.LbListener.resetMutualAuthentication"></a>

```go
func ResetMutualAuthentication()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbListener.LbListener.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbListener.LbListener.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lbListener.LbListener.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName()
```

##### `ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName` <a name="ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName()
```

##### `ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName` <a name="ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName()
```

##### `ResetRoutingHttpRequestXAmznTlsVersionHeaderName` <a name="ResetRoutingHttpRequestXAmznTlsVersionHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpRequestXAmznTlsVersionHeaderName"></a>

```go
func ResetRoutingHttpRequestXAmznTlsVersionHeaderName()
```

##### `ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowHeadersHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowMethodsHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue` <a name="ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlAllowOriginHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlAllowOriginHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue` <a name="ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlExposeHeadersHeaderValue()
```

##### `ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue` <a name="ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseAccessControlMaxAgeHeaderValue"></a>

```go
func ResetRoutingHttpResponseAccessControlMaxAgeHeaderValue()
```

##### `ResetRoutingHttpResponseContentSecurityPolicyHeaderValue` <a name="ResetRoutingHttpResponseContentSecurityPolicyHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseContentSecurityPolicyHeaderValue"></a>

```go
func ResetRoutingHttpResponseContentSecurityPolicyHeaderValue()
```

##### `ResetRoutingHttpResponseServerEnabled` <a name="ResetRoutingHttpResponseServerEnabled" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseServerEnabled"></a>

```go
func ResetRoutingHttpResponseServerEnabled()
```

##### `ResetRoutingHttpResponseStrictTransportSecurityHeaderValue` <a name="ResetRoutingHttpResponseStrictTransportSecurityHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseStrictTransportSecurityHeaderValue"></a>

```go
func ResetRoutingHttpResponseStrictTransportSecurityHeaderValue()
```

##### `ResetRoutingHttpResponseXContentTypeOptionsHeaderValue` <a name="ResetRoutingHttpResponseXContentTypeOptionsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseXContentTypeOptionsHeaderValue"></a>

```go
func ResetRoutingHttpResponseXContentTypeOptionsHeaderValue()
```

##### `ResetRoutingHttpResponseXFrameOptionsHeaderValue` <a name="ResetRoutingHttpResponseXFrameOptionsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.resetRoutingHttpResponseXFrameOptionsHeaderValue"></a>

```go
func ResetRoutingHttpResponseXFrameOptionsHeaderValue()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.resetSslPolicy"></a>

```go
func ResetSslPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lbListener.LbListener.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lbListener.LbListener.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTcpIdleTimeoutSeconds` <a name="ResetTcpIdleTimeoutSeconds" id="@cdktf/provider-aws.lbListener.LbListener.resetTcpIdleTimeoutSeconds"></a>

```go
func ResetTcpIdleTimeoutSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lbListener.LbListener.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbListener resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbListener.LbListener.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.LbListener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.LbListener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.LbListener_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lbListener.LbListener.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.LbListener_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LbListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListener.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lbListener.LbListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LbListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lbListener.LbListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LbListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListener.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LbListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList">LbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference">LbListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference">LbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicyInput">AlpnPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.defaultActionInput">DefaultActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.mutualAuthenticationInput">MutualAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput">RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput">RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsVersionHeaderNameInput">RoutingHttpRequestXAmznTlsVersionHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValueInput">RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValueInput">RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValueInput">RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValueInput">RoutingHttpResponseAccessControlAllowOriginHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValueInput">RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValueInput">RoutingHttpResponseAccessControlMaxAgeHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseContentSecurityPolicyHeaderValueInput">RoutingHttpResponseContentSecurityPolicyHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseServerEnabledInput">RoutingHttpResponseServerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseStrictTransportSecurityHeaderValueInput">RoutingHttpResponseStrictTransportSecurityHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXContentTypeOptionsHeaderValueInput">RoutingHttpResponseXContentTypeOptionsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXFrameOptionsHeaderValueInput">RoutingHttpResponseXFrameOptionsHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.sslPolicyInput">SslPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tcpIdleTimeoutSecondsInput">TcpIdleTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicy">AlpnPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderName">RoutingHttpRequestXAmznMtlsClientcertHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName">RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName">RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName">RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName">RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName">RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName">RoutingHttpRequestXAmznTlsCipherSuiteHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsVersionHeaderName">RoutingHttpRequestXAmznTlsVersionHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue">RoutingHttpResponseAccessControlAllowCredentialsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValue">RoutingHttpResponseAccessControlAllowHeadersHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValue">RoutingHttpResponseAccessControlAllowMethodsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValue">RoutingHttpResponseAccessControlAllowOriginHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValue">RoutingHttpResponseAccessControlExposeHeadersHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValue">RoutingHttpResponseAccessControlMaxAgeHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseContentSecurityPolicyHeaderValue">RoutingHttpResponseContentSecurityPolicyHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseServerEnabled">RoutingHttpResponseServerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseStrictTransportSecurityHeaderValue">RoutingHttpResponseStrictTransportSecurityHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXContentTypeOptionsHeaderValue">RoutingHttpResponseXContentTypeOptionsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXFrameOptionsHeaderValue">RoutingHttpResponseXFrameOptionsHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbListener.LbListener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbListener.LbListener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbListener.LbListener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbListener.LbListener.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbListener.LbListener.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbListener.LbListener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbListener.LbListener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbListener.LbListener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbListener.LbListener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbListener.LbListener.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListener.LbListener.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.lbListener.LbListener.property.defaultAction"></a>

```go
func DefaultAction() LbListenerDefaultActionList
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList">LbListenerDefaultActionList</a>

---

##### `MutualAuthentication`<sup>Required</sup> <a name="MutualAuthentication" id="@cdktf/provider-aws.lbListener.LbListener.property.mutualAuthentication"></a>

```go
func MutualAuthentication() LbListenerMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference">LbListenerMutualAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lbListener.LbListener.property.timeouts"></a>

```go
func Timeouts() LbListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference">LbListenerTimeoutsOutputReference</a>

---

##### `AlpnPolicyInput`<sup>Optional</sup> <a name="AlpnPolicyInput" id="@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicyInput"></a>

```go
func AlpnPolicyInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.lbListener.LbListener.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-aws.lbListener.LbListener.property.defaultActionInput"></a>

```go
func DefaultActionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbListener.LbListener.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArnInput"></a>

```go
func LoadBalancerArnInput() *string
```

- *Type:* *string

---

##### `MutualAuthenticationInput`<sup>Optional</sup> <a name="MutualAuthenticationInput" id="@cdktf/provider-aws.lbListener.LbListener.property.mutualAuthenticationInput"></a>

```go
func MutualAuthenticationInput() LbListenerMutualAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbListener.LbListener.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbListener.LbListener.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lbListener.LbListener.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznTlsCipherSuiteHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsVersionHeaderNameInput`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsVersionHeaderNameInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsVersionHeaderNameInput"></a>

```go
func RoutingHttpRequestXAmznTlsVersionHeaderNameInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowCredentialsHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowHeadersHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowMethodsHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowOriginHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowOriginHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlAllowOriginHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlExposeHeadersHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlMaxAgeHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlMaxAgeHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValueInput"></a>

```go
func RoutingHttpResponseAccessControlMaxAgeHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseContentSecurityPolicyHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseContentSecurityPolicyHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseContentSecurityPolicyHeaderValueInput"></a>

```go
func RoutingHttpResponseContentSecurityPolicyHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseServerEnabledInput`<sup>Optional</sup> <a name="RoutingHttpResponseServerEnabledInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseServerEnabledInput"></a>

```go
func RoutingHttpResponseServerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingHttpResponseStrictTransportSecurityHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseStrictTransportSecurityHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseStrictTransportSecurityHeaderValueInput"></a>

```go
func RoutingHttpResponseStrictTransportSecurityHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXContentTypeOptionsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseXContentTypeOptionsHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXContentTypeOptionsHeaderValueInput"></a>

```go
func RoutingHttpResponseXContentTypeOptionsHeaderValueInput() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXFrameOptionsHeaderValueInput`<sup>Optional</sup> <a name="RoutingHttpResponseXFrameOptionsHeaderValueInput" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXFrameOptionsHeaderValueInput"></a>

```go
func RoutingHttpResponseXFrameOptionsHeaderValueInput() *string
```

- *Type:* *string

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-aws.lbListener.LbListener.property.sslPolicyInput"></a>

```go
func SslPolicyInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TcpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="TcpIdleTimeoutSecondsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tcpIdleTimeoutSecondsInput"></a>

```go
func TcpIdleTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AlpnPolicy`<sup>Required</sup> <a name="AlpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicy"></a>

```go
func AlpnPolicy() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.lbListener.LbListener.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbListener.LbListener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbListener.LbListener.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListener.LbListener.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lbListener.LbListener.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName"></a>

```go
func RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsCipherSuiteHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznTlsCipherSuiteHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName"></a>

```go
func RoutingHttpRequestXAmznTlsCipherSuiteHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpRequestXAmznTlsVersionHeaderName`<sup>Required</sup> <a name="RoutingHttpRequestXAmznTlsVersionHeaderName" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpRequestXAmznTlsVersionHeaderName"></a>

```go
func RoutingHttpRequestXAmznTlsVersionHeaderName() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowCredentialsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowCredentialsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowCredentialsHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowHeadersHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowHeadersHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowHeadersHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowHeadersHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowMethodsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowMethodsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowMethodsHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowMethodsHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlAllowOriginHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlAllowOriginHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlAllowOriginHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlAllowOriginHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlExposeHeadersHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlExposeHeadersHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlExposeHeadersHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlExposeHeadersHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseAccessControlMaxAgeHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseAccessControlMaxAgeHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseAccessControlMaxAgeHeaderValue"></a>

```go
func RoutingHttpResponseAccessControlMaxAgeHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseContentSecurityPolicyHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseContentSecurityPolicyHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseContentSecurityPolicyHeaderValue"></a>

```go
func RoutingHttpResponseContentSecurityPolicyHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseServerEnabled`<sup>Required</sup> <a name="RoutingHttpResponseServerEnabled" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseServerEnabled"></a>

```go
func RoutingHttpResponseServerEnabled() interface{}
```

- *Type:* interface{}

---

##### `RoutingHttpResponseStrictTransportSecurityHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseStrictTransportSecurityHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseStrictTransportSecurityHeaderValue"></a>

```go
func RoutingHttpResponseStrictTransportSecurityHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXContentTypeOptionsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseXContentTypeOptionsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXContentTypeOptionsHeaderValue"></a>

```go
func RoutingHttpResponseXContentTypeOptionsHeaderValue() *string
```

- *Type:* *string

---

##### `RoutingHttpResponseXFrameOptionsHeaderValue`<sup>Required</sup> <a name="RoutingHttpResponseXFrameOptionsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListener.property.routingHttpResponseXFrameOptionsHeaderValue"></a>

```go
func RoutingHttpResponseXFrameOptionsHeaderValue() *string
```

- *Type:* *string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lbListener.LbListener.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TcpIdleTimeoutSeconds`<sup>Required</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktf/provider-aws.lbListener.LbListener.property.tcpIdleTimeoutSeconds"></a>

```go
func TcpIdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbListener.LbListener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerConfig <a name="LbListenerConfig" id="@cdktf/provider-aws.lbListener.LbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultAction: interface{},
	LoadBalancerArn: *string,
	AlpnPolicy: *string,
	CertificateArn: *string,
	Id: *string,
	MutualAuthentication: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerMutualAuthentication,
	Port: *f64,
	Protocol: *string,
	Region: *string,
	RoutingHttpRequestXAmznMtlsClientcertHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName: *string,
	RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName: *string,
	RoutingHttpRequestXAmznTlsCipherSuiteHeaderName: *string,
	RoutingHttpRequestXAmznTlsVersionHeaderName: *string,
	RoutingHttpResponseAccessControlAllowCredentialsHeaderValue: *string,
	RoutingHttpResponseAccessControlAllowHeadersHeaderValue: *string,
	RoutingHttpResponseAccessControlAllowMethodsHeaderValue: *string,
	RoutingHttpResponseAccessControlAllowOriginHeaderValue: *string,
	RoutingHttpResponseAccessControlExposeHeadersHeaderValue: *string,
	RoutingHttpResponseAccessControlMaxAgeHeaderValue: *string,
	RoutingHttpResponseContentSecurityPolicyHeaderValue: *string,
	RoutingHttpResponseServerEnabled: interface{},
	RoutingHttpResponseStrictTransportSecurityHeaderValue: *string,
	RoutingHttpResponseXContentTypeOptionsHeaderValue: *string,
	RoutingHttpResponseXFrameOptionsHeaderValue: *string,
	SslPolicy: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TcpIdleTimeoutSeconds: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.defaultAction">DefaultAction</a></code> | <code>interface{}</code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#load_balancer_arn LbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.alpnPolicy">AlpnPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#alpn_policy LbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#certificate_arn LbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#id LbListener#id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a></code> | mutual_authentication block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertHeaderName">RoutingHttpRequestXAmznMtlsClientcertHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName">RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName">RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName">RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName">RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName">RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName">RoutingHttpRequestXAmznTlsCipherSuiteHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name LbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznTlsVersionHeaderName">RoutingHttpRequestXAmznTlsVersionHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_version_header_name LbListener#routing_http_request_x_amzn_tls_version_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue">RoutingHttpResponseAccessControlAllowCredentialsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_credentials_header_value LbListener#routing_http_response_access_control_allow_credentials_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowHeadersHeaderValue">RoutingHttpResponseAccessControlAllowHeadersHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_headers_header_value LbListener#routing_http_response_access_control_allow_headers_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowMethodsHeaderValue">RoutingHttpResponseAccessControlAllowMethodsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_methods_header_value LbListener#routing_http_response_access_control_allow_methods_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowOriginHeaderValue">RoutingHttpResponseAccessControlAllowOriginHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_origin_header_value LbListener#routing_http_response_access_control_allow_origin_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlExposeHeadersHeaderValue">RoutingHttpResponseAccessControlExposeHeadersHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_expose_headers_header_value LbListener#routing_http_response_access_control_expose_headers_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlMaxAgeHeaderValue">RoutingHttpResponseAccessControlMaxAgeHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_max_age_header_value LbListener#routing_http_response_access_control_max_age_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseContentSecurityPolicyHeaderValue">RoutingHttpResponseContentSecurityPolicyHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_content_security_policy_header_value LbListener#routing_http_response_content_security_policy_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseServerEnabled">RoutingHttpResponseServerEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_server_enabled LbListener#routing_http_response_server_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseStrictTransportSecurityHeaderValue">RoutingHttpResponseStrictTransportSecurityHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_strict_transport_security_header_value LbListener#routing_http_response_strict_transport_security_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseXContentTypeOptionsHeaderValue">RoutingHttpResponseXContentTypeOptionsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_x_content_type_options_header_value LbListener#routing_http_response_x_content_type_options_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseXFrameOptionsHeaderValue">RoutingHttpResponseXFrameOptionsHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_x_frame_options_header_value LbListener#routing_http_response_x_frame_options_header_value}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#ssl_policy LbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#tags LbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#tags_all LbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#tcp_idle_timeout_seconds LbListener#tcp_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.defaultAction"></a>

```go
DefaultAction interface{}
```

- *Type:* interface{}

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#default_action LbListener#default_action}

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.loadBalancerArn"></a>

```go
LoadBalancerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#load_balancer_arn LbListener#load_balancer_arn}.

---

##### `AlpnPolicy`<sup>Optional</sup> <a name="AlpnPolicy" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.alpnPolicy"></a>

```go
AlpnPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#alpn_policy LbListener#alpn_policy}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#certificate_arn LbListener#certificate_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#id LbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutualAuthentication`<sup>Optional</sup> <a name="MutualAuthentication" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.mutualAuthentication"></a>

```go
MutualAuthentication LbListenerMutualAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a>

mutual_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#mutual_authentication LbListener#mutual_authentication}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#port LbListener#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#protocol LbListener#protocol}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#region LbListener#region}

---

##### `RoutingHttpRequestXAmznMtlsClientcertHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertLeafHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertLeafHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}.

---

##### `RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznMtlsClientcertValidityHeaderName"></a>

```go
RoutingHttpRequestXAmznMtlsClientcertValidityHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}.

---

##### `RoutingHttpRequestXAmznTlsCipherSuiteHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsCipherSuiteHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznTlsCipherSuiteHeaderName"></a>

```go
RoutingHttpRequestXAmznTlsCipherSuiteHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name LbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}.

---

##### `RoutingHttpRequestXAmznTlsVersionHeaderName`<sup>Optional</sup> <a name="RoutingHttpRequestXAmznTlsVersionHeaderName" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpRequestXAmznTlsVersionHeaderName"></a>

```go
RoutingHttpRequestXAmznTlsVersionHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_version_header_name LbListener#routing_http_request_x_amzn_tls_version_header_name}.

---

##### `RoutingHttpResponseAccessControlAllowCredentialsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowCredentialsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowCredentialsHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowCredentialsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_credentials_header_value LbListener#routing_http_response_access_control_allow_credentials_header_value}.

---

##### `RoutingHttpResponseAccessControlAllowHeadersHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowHeadersHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowHeadersHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowHeadersHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_headers_header_value LbListener#routing_http_response_access_control_allow_headers_header_value}.

---

##### `RoutingHttpResponseAccessControlAllowMethodsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowMethodsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowMethodsHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowMethodsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_methods_header_value LbListener#routing_http_response_access_control_allow_methods_header_value}.

---

##### `RoutingHttpResponseAccessControlAllowOriginHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlAllowOriginHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlAllowOriginHeaderValue"></a>

```go
RoutingHttpResponseAccessControlAllowOriginHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_allow_origin_header_value LbListener#routing_http_response_access_control_allow_origin_header_value}.

---

##### `RoutingHttpResponseAccessControlExposeHeadersHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlExposeHeadersHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlExposeHeadersHeaderValue"></a>

```go
RoutingHttpResponseAccessControlExposeHeadersHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_expose_headers_header_value LbListener#routing_http_response_access_control_expose_headers_header_value}.

---

##### `RoutingHttpResponseAccessControlMaxAgeHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseAccessControlMaxAgeHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseAccessControlMaxAgeHeaderValue"></a>

```go
RoutingHttpResponseAccessControlMaxAgeHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_access_control_max_age_header_value LbListener#routing_http_response_access_control_max_age_header_value}.

---

##### `RoutingHttpResponseContentSecurityPolicyHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseContentSecurityPolicyHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseContentSecurityPolicyHeaderValue"></a>

```go
RoutingHttpResponseContentSecurityPolicyHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_content_security_policy_header_value LbListener#routing_http_response_content_security_policy_header_value}.

---

##### `RoutingHttpResponseServerEnabled`<sup>Optional</sup> <a name="RoutingHttpResponseServerEnabled" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseServerEnabled"></a>

```go
RoutingHttpResponseServerEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_server_enabled LbListener#routing_http_response_server_enabled}.

---

##### `RoutingHttpResponseStrictTransportSecurityHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseStrictTransportSecurityHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseStrictTransportSecurityHeaderValue"></a>

```go
RoutingHttpResponseStrictTransportSecurityHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_strict_transport_security_header_value LbListener#routing_http_response_strict_transport_security_header_value}.

---

##### `RoutingHttpResponseXContentTypeOptionsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseXContentTypeOptionsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseXContentTypeOptionsHeaderValue"></a>

```go
RoutingHttpResponseXContentTypeOptionsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_x_content_type_options_header_value LbListener#routing_http_response_x_content_type_options_header_value}.

---

##### `RoutingHttpResponseXFrameOptionsHeaderValue`<sup>Optional</sup> <a name="RoutingHttpResponseXFrameOptionsHeaderValue" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.routingHttpResponseXFrameOptionsHeaderValue"></a>

```go
RoutingHttpResponseXFrameOptionsHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#routing_http_response_x_frame_options_header_value LbListener#routing_http_response_x_frame_options_header_value}.

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.sslPolicy"></a>

```go
SslPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#ssl_policy LbListener#ssl_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#tags LbListener#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#tags_all LbListener#tags_all}.

---

##### `TcpIdleTimeoutSeconds`<sup>Optional</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tcpIdleTimeoutSeconds"></a>

```go
TcpIdleTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#tcp_idle_timeout_seconds LbListener#tcp_idle_timeout_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.timeouts"></a>

```go
Timeouts LbListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#timeouts LbListener#timeouts}

---

### LbListenerDefaultAction <a name="LbListenerDefaultAction" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultAction {
	Type: *string,
	AuthenticateCognito: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerDefaultActionAuthenticateCognito,
	AuthenticateOidc: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerDefaultActionAuthenticateOidc,
	FixedResponse: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerDefaultActionFixedResponse,
	Forward: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerDefaultActionForward,
	Order: *f64,
	Redirect: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerDefaultActionRedirect,
	TargetGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#type LbListener#type}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#order LbListener#order}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#target_group_arn LbListener#target_group_arn}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#type LbListener#type}.

---

##### `AuthenticateCognito`<sup>Optional</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateCognito"></a>

```go
AuthenticateCognito LbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authenticate_cognito LbListener#authenticate_cognito}

---

##### `AuthenticateOidc`<sup>Optional</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateOidc"></a>

```go
AuthenticateOidc LbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authenticate_oidc LbListener#authenticate_oidc}

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.fixedResponse"></a>

```go
FixedResponse LbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#fixed_response LbListener#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.forward"></a>

```go
Forward LbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#forward LbListener#forward}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#order LbListener#order}.

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.redirect"></a>

```go
Redirect LbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#redirect LbListener#redirect}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#target_group_arn LbListener#target_group_arn}.

---

### LbListenerDefaultActionAuthenticateCognito <a name="LbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionAuthenticateCognito {
	UserPoolArn: *string,
	UserPoolClientId: *string,
	UserPoolDomain: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_pool_arn LbListener#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_pool_client_id LbListener#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_pool_domain LbListener#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#scope LbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}. |

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolArn"></a>

```go
UserPoolArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_pool_arn LbListener#user_pool_arn}.

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolClientId"></a>

```go
UserPoolClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_pool_client_id LbListener#user_pool_client_id}.

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolDomain"></a>

```go
UserPoolDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_pool_domain LbListener#user_pool_domain}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#scope LbListener#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}.

---

### LbListenerDefaultActionAuthenticateOidc <a name="LbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionAuthenticateOidc {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authorization_endpoint LbListener#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#client_id LbListener#client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#client_secret LbListener#client_secret}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#issuer LbListener#issuer}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#token_endpoint LbListener#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_info_endpoint LbListener#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#scope LbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authorization_endpoint LbListener#authorization_endpoint}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#client_id LbListener#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#client_secret LbListener#client_secret}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#issuer LbListener#issuer}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#token_endpoint LbListener#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#user_info_endpoint LbListener#user_info_endpoint}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#scope LbListener#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}.

---

### LbListenerDefaultActionFixedResponse <a name="LbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionFixedResponse {
	ContentType: *string,
	MessageBody: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#content_type LbListener#content_type}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.messageBody">MessageBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#message_body LbListener#message_body}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#status_code LbListener#status_code}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#content_type LbListener#content_type}.

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.messageBody"></a>

```go
MessageBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#message_body LbListener#message_body}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#status_code LbListener#status_code}.

---

### LbListenerDefaultActionForward <a name="LbListenerDefaultActionForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionForward {
	TargetGroup: interface{},
	Stickiness: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListener.LbListenerDefaultActionForwardStickiness,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.targetGroup">TargetGroup</a></code> | <code>interface{}</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | stickiness block. |

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.targetGroup"></a>

```go
TargetGroup interface{}
```

- *Type:* interface{}

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#target_group LbListener#target_group}

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.stickiness"></a>

```go
Stickiness LbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#stickiness LbListener#stickiness}

---

### LbListenerDefaultActionForwardStickiness <a name="LbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionForwardStickiness {
	Duration: *f64,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#duration LbListener#duration}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#enabled LbListener#enabled}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#duration LbListener#duration}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#enabled LbListener#enabled}.

---

### LbListenerDefaultActionForwardTargetGroup <a name="LbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionForwardTargetGroup {
	Arn: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#arn LbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#weight LbListener#weight}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#arn LbListener#arn}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#weight LbListener#weight}.

---

### LbListenerDefaultActionRedirect <a name="LbListenerDefaultActionRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerDefaultActionRedirect {
	StatusCode: *string,
	Host: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#status_code LbListener#status_code}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#host LbListener#host}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#path LbListener#path}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#query LbListener#query}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#status_code LbListener#status_code}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#host LbListener#host}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#path LbListener#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#port LbListener#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#protocol LbListener#protocol}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#query LbListener#query}.

---

### LbListenerMutualAuthentication <a name="LbListenerMutualAuthentication" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerMutualAuthentication {
	Mode: *string,
	AdvertiseTrustStoreCaNames: *string,
	IgnoreClientCertificateExpiry: interface{},
	TrustStoreArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#mode LbListener#mode}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#advertise_trust_store_ca_names LbListener#advertise_trust_store_ca_names}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#ignore_client_certificate_expiry LbListener#ignore_client_certificate_expiry}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#trust_store_arn LbListener#trust_store_arn}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#mode LbListener#mode}.

---

##### `AdvertiseTrustStoreCaNames`<sup>Optional</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.advertiseTrustStoreCaNames"></a>

```go
AdvertiseTrustStoreCaNames *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#advertise_trust_store_ca_names LbListener#advertise_trust_store_ca_names}.

---

##### `IgnoreClientCertificateExpiry`<sup>Optional</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.ignoreClientCertificateExpiry"></a>

```go
IgnoreClientCertificateExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#ignore_client_certificate_expiry LbListener#ignore_client_certificate_expiry}.

---

##### `TrustStoreArn`<sup>Optional</sup> <a name="TrustStoreArn" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication.property.trustStoreArn"></a>

```go
TrustStoreArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#trust_store_arn LbListener#trust_store_arn}.

---

### LbListenerTimeouts <a name="LbListenerTimeouts" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

&lblistener.LbListenerTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#create LbListener#create}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#update LbListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#create LbListener#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener#update LbListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerDefaultActionAuthenticateCognitoOutputReference <a name="LbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionAuthenticateCognitoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerDefaultActionAuthenticateCognitoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```go
func UserPoolArnInput() *string
```

- *Type:* *string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```go
func UserPoolClientIdInput() *string
```

- *Type:* *string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```go
func UserPoolDomainInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---


### LbListenerDefaultActionAuthenticateOidcOutputReference <a name="LbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionAuthenticateOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerDefaultActionAuthenticateOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---


### LbListenerDefaultActionFixedResponseOutputReference <a name="LbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerDefaultActionFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetMessageBody"></a>

```go
func ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput"></a>

```go
func MessageBodyInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---


### LbListenerDefaultActionForwardOutputReference <a name="LbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionForwardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerDefaultActionForwardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resetStickiness">ResetStickiness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness"></a>

```go
func PutStickiness(value LbListenerDefaultActionForwardStickiness)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup"></a>

```go
func PutTargetGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resetStickiness"></a>

```go
func ResetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference">LbListenerDefaultActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList">LbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```go
func Stickiness() LbListenerDefaultActionForwardStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference">LbListenerDefaultActionForwardStickinessOutputReference</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```go
func TargetGroup() LbListenerDefaultActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList">LbListenerDefaultActionForwardTargetGroupList</a>

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickinessInput"></a>

```go
func StickinessInput() LbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroupInput"></a>

```go
func TargetGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---


### LbListenerDefaultActionForwardStickinessOutputReference <a name="LbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionForwardStickinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerDefaultActionForwardStickinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---


### LbListenerDefaultActionForwardTargetGroupList <a name="LbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionForwardTargetGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbListenerDefaultActionForwardTargetGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get"></a>

```go
func Get(index *f64) LbListenerDefaultActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerDefaultActionForwardTargetGroupOutputReference <a name="LbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionForwardTargetGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbListenerDefaultActionForwardTargetGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerDefaultActionList <a name="LbListenerDefaultActionList" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbListenerDefaultActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get"></a>

```go
func Get(index *f64) LbListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerDefaultActionOutputReference <a name="LbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbListenerDefaultActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito">PutAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc">PutAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateCognito">ResetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateOidc">ResetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognito` <a name="PutAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito"></a>

```go
func PutAuthenticateCognito(value LbListenerDefaultActionAuthenticateCognito)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---

##### `PutAuthenticateOidc` <a name="PutAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc"></a>

```go
func PutAuthenticateOidc(value LbListenerDefaultActionAuthenticateOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse"></a>

```go
func PutFixedResponse(value LbListenerDefaultActionFixedResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward"></a>

```go
func PutForward(value LbListenerDefaultActionForward)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect"></a>

```go
func PutRedirect(value LbListenerDefaultActionRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---

##### `ResetAuthenticateCognito` <a name="ResetAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateCognito"></a>

```go
func ResetAuthenticateCognito()
```

##### `ResetAuthenticateOidc` <a name="ResetAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateOidc"></a>

```go
func ResetAuthenticateOidc()
```

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetFixedResponse"></a>

```go
func ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetForward"></a>

```go
func ResetForward()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference">LbListenerDefaultActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference">LbListenerDefaultActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference">LbListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference">LbListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference">LbListenerDefaultActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognitoInput">AuthenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidcInput">AuthenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognito`<sup>Required</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```go
func AuthenticateCognito() LbListenerDefaultActionAuthenticateCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference">LbListenerDefaultActionAuthenticateCognitoOutputReference</a>

---

##### `AuthenticateOidc`<sup>Required</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```go
func AuthenticateOidc() LbListenerDefaultActionAuthenticateOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference">LbListenerDefaultActionAuthenticateOidcOutputReference</a>

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() LbListenerDefaultActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference">LbListenerDefaultActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forward"></a>

```go
func Forward() LbListenerDefaultActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference">LbListenerDefaultActionForwardOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirect"></a>

```go
func Redirect() LbListenerDefaultActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference">LbListenerDefaultActionRedirectOutputReference</a>

---

##### `AuthenticateCognitoInput`<sup>Optional</sup> <a name="AuthenticateCognitoInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognitoInput"></a>

```go
func AuthenticateCognitoInput() LbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---

##### `AuthenticateOidcInput`<sup>Optional</sup> <a name="AuthenticateOidcInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidcInput"></a>

```go
func AuthenticateOidcInput() LbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```go
func FixedResponseInput() LbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forwardInput"></a>

```go
func ForwardInput() LbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirectInput"></a>

```go
func RedirectInput() LbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerDefaultActionRedirectOutputReference <a name="LbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerDefaultActionRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerDefaultActionRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---


### LbListenerMutualAuthenticationOutputReference <a name="LbListenerMutualAuthenticationOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerMutualAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerMutualAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames">ResetAdvertiseTrustStoreCaNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry">ResetIgnoreClientCertificateExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resetTrustStoreArn">ResetTrustStoreArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertiseTrustStoreCaNames` <a name="ResetAdvertiseTrustStoreCaNames" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames"></a>

```go
func ResetAdvertiseTrustStoreCaNames()
```

##### `ResetIgnoreClientCertificateExpiry` <a name="ResetIgnoreClientCertificateExpiry" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry"></a>

```go
func ResetIgnoreClientCertificateExpiry()
```

##### `ResetTrustStoreArn` <a name="ResetTrustStoreArn" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.resetTrustStoreArn"></a>

```go
func ResetTrustStoreArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput">AdvertiseTrustStoreCaNamesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput">IgnoreClientCertificateExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.trustStoreArnInput">TrustStoreArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNamesInput`<sup>Optional</sup> <a name="AdvertiseTrustStoreCaNamesInput" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput"></a>

```go
func AdvertiseTrustStoreCaNamesInput() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiryInput`<sup>Optional</sup> <a name="IgnoreClientCertificateExpiryInput" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput"></a>

```go
func IgnoreClientCertificateExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `TrustStoreArnInput`<sup>Optional</sup> <a name="TrustStoreArnInput" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.trustStoreArnInput"></a>

```go
func TrustStoreArnInput() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNames`<sup>Required</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```go
func AdvertiseTrustStoreCaNames() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiry`<sup>Required</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```go
func IgnoreClientCertificateExpiry() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerMutualAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerMutualAuthentication">LbListenerMutualAuthentication</a>

---


### LbListenerTimeoutsOutputReference <a name="LbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistener"

lblistener.NewLbListenerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



