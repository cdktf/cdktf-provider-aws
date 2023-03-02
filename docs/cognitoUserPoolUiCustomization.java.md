# `cognitoUserPoolUiCustomization` Submodule <a name="`cognitoUserPoolUiCustomization` Submodule" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUiCustomization <a name="CognitoUserPoolUiCustomization" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization aws_cognito_user_pool_ui_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_ui_customization.CognitoUserPoolUiCustomization;

CognitoUserPoolUiCustomization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .clientId(java.lang.String)
//  .css(java.lang.String)
//  .id(java.lang.String)
//  .imageFile(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.css">css</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.imageFile">imageFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}.

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.css"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageFile`<sup>Optional</sup> <a name="imageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.imageFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss">resetCss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile">resetImageFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetCss` <a name="resetCss" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss"></a>

```java
public void resetCss()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId"></a>

```java
public void resetId()
```

##### `resetImageFile` <a name="resetImageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile"></a>

```java
public void resetImageFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_ui_customization.CognitoUserPoolUiCustomization;

CognitoUserPoolUiCustomization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_ui_customization.CognitoUserPoolUiCustomization;

CognitoUserPoolUiCustomization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_ui_customization.CognitoUserPoolUiCustomization;

CognitoUserPoolUiCustomization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion">cssVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate">lastModifiedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput">cssInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput">imageFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css">css</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile">imageFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `cssVersion`<sup>Required</sup> <a name="cssVersion" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion"></a>

```java
public java.lang.String getCssVersion();
```

- *Type:* java.lang.String

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate"></a>

```java
public java.lang.String getLastModifiedDate();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `cssInput`<sup>Optional</sup> <a name="cssInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput"></a>

```java
public java.lang.String getCssInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageFileInput`<sup>Optional</sup> <a name="imageFileInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput"></a>

```java
public java.lang.String getImageFileInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css"></a>

```java
public java.lang.String getCss();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageFile`<sup>Required</sup> <a name="imageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile"></a>

```java
public java.lang.String getImageFile();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUiCustomizationConfig <a name="CognitoUserPoolUiCustomizationConfig" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_ui_customization.CognitoUserPoolUiCustomizationConfig;

CognitoUserPoolUiCustomizationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .clientId(java.lang.String)
//  .css(java.lang.String)
//  .id(java.lang.String)
//  .imageFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css">css</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile">imageFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}.

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css"></a>

```java
public java.lang.String getCss();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageFile`<sup>Optional</sup> <a name="imageFile" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile"></a>

```java
public java.lang.String getImageFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}.

---



