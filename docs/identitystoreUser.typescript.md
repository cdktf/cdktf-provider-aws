# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktf/provider-aws.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUser(scope: Construct, id: string, config: IdentitystoreUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses">putAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails">putEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers">putPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetEmails">resetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetNickname">resetNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">resetPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAddresses` <a name="putAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```typescript
public putAddresses(value: IdentitystoreUserAddresses): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---

##### `putEmails` <a name="putEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails"></a>

```typescript
public putEmails(value: IdentitystoreUserEmails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---

##### `putName` <a name="putName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName"></a>

```typescript
public putName(value: IdentitystoreUserName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `putPhoneNumbers` <a name="putPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```typescript
public putPhoneNumbers(value: IdentitystoreUserPhoneNumbers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```typescript
public resetAddresses(): void
```

##### `resetEmails` <a name="resetEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```typescript
public resetEmails(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetNickname` <a name="resetNickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetNickname"></a>

```typescript
public resetNickname(): void
```

##### `resetPhoneNumbers` <a name="resetPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```typescript
public resetPhoneNumbers(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```typescript
public resetProfileUrl(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

identitystoreUser.IdentitystoreUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

identitystoreUser.IdentitystoreUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

identitystoreUser.IdentitystoreUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference">IdentitystoreUserAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference">IdentitystoreUserEmailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList">IdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference">IdentitystoreUserPhoneNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addressesInput">addressesInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emailsInput">emailsInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nameInput">nameInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nicknameInput">nicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">phoneNumbersInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrlInput">profileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nickname">nickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```typescript
public readonly addresses: IdentitystoreUserAddressesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference">IdentitystoreUserAddressesOutputReference</a>

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emails"></a>

```typescript
public readonly emails: IdentitystoreUserEmailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference">IdentitystoreUserEmailsOutputReference</a>

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.externalIds"></a>

```typescript
public readonly externalIds: IdentitystoreUserExternalIdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList">IdentitystoreUserExternalIdsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.name"></a>

```typescript
public readonly name: IdentitystoreUserNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `phoneNumbers`<sup>Required</sup> <a name="phoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```typescript
public readonly phoneNumbers: IdentitystoreUserPhoneNumbersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference">IdentitystoreUserPhoneNumbersOutputReference</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```typescript
public readonly addressesInput: IdentitystoreUserAddresses;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```typescript
public readonly emailsInput: IdentitystoreUserEmails;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```typescript
public readonly identityStoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```typescript
public readonly nameInput: IdentitystoreUserName;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `nicknameInput`<sup>Optional</sup> <a name="nicknameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nicknameInput"></a>

```typescript
public readonly nicknameInput: string;
```

- *Type:* string

---

##### `phoneNumbersInput`<sup>Optional</sup> <a name="phoneNumbersInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```typescript
public readonly phoneNumbersInput: IdentitystoreUserPhoneNumbers;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```typescript
public readonly profileUrlInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `nickname`<sup>Required</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nickname"></a>

```typescript
public readonly nickname: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

const identitystoreUserAddresses: identitystoreUser.IdentitystoreUserAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.formatted">formatted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.locality">locality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">streetAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}.

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}.

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

const identitystoreUserConfig: identitystoreUser.IdentitystoreUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | addresses block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | emails block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.nickname">nickname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | phone_numbers block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">profileUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userType">userType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```typescript
public readonly name: IdentitystoreUserName;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

name block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#name IdentitystoreUser#name}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}.

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```typescript
public readonly addresses: IdentitystoreUserAddresses;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

addresses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```typescript
public readonly emails: IdentitystoreUserEmails;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

emails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#emails IdentitystoreUser#emails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}.

---

##### `nickname`<sup>Optional</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.nickname"></a>

```typescript
public readonly nickname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}.

---

##### `phoneNumbers`<sup>Optional</sup> <a name="phoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```typescript
public readonly phoneNumbers: IdentitystoreUserPhoneNumbers;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

phone_numbers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}.

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}.

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}.

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

const identitystoreUserEmails: identitystoreUser.IdentitystoreUserEmails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

### IdentitystoreUserExternalIds <a name="IdentitystoreUserExternalIds" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

const identitystoreUserExternalIds: identitystoreUser.IdentitystoreUserExternalIds = { ... }
```


### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

const identitystoreUserName: identitystoreUser.IdentitystoreUserName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.familyName">familyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.givenName">givenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.formatted">formatted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.middleName">middleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}. |

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}.

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}.

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}.

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}.

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

const identitystoreUserPhoneNumbers: identitystoreUser.IdentitystoreUserPhoneNumbers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUserAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```typescript
public resetFormatted(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">formattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```typescript
public readonly formattedInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentitystoreUserAddresses;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUserEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentitystoreUserEmails;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserExternalIdsList <a name="IdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUserExternalIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get"></a>

```typescript
public get(index: number): IdentitystoreUserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentitystoreUserExternalIdsOutputReference <a name="IdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUserExternalIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds">IdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentitystoreUserExternalIds;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds">IdentitystoreUserExternalIds</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUserNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">resetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">resetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">resetMiddleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormatted` <a name="resetFormatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```typescript
public resetFormatted(): void
```

##### `resetHonorificPrefix` <a name="resetHonorificPrefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```typescript
public resetHonorificPrefix(): void
```

##### `resetHonorificSuffix` <a name="resetHonorificSuffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```typescript
public resetHonorificSuffix(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">formattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">honorificPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">honorificSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```typescript
public readonly familyNameInput: string;
```

- *Type:* string

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```typescript
public readonly formattedInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `honorificPrefixInput`<sup>Optional</sup> <a name="honorificPrefixInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```typescript
public readonly honorificPrefixInput: string;
```

- *Type:* string

---

##### `honorificSuffixInput`<sup>Optional</sup> <a name="honorificSuffixInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```typescript
public readonly honorificSuffixInput: string;
```

- *Type:* string

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentitystoreUserName;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktf/provider-aws'

new identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentitystoreUserPhoneNumbers;
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---



