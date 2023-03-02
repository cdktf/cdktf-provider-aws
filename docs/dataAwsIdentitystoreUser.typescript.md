# `dataAwsIdentitystoreUser` Submodule <a name="`dataAwsIdentitystoreUser` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreUser <a name="DataAwsIdentitystoreUser" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUser(scope: Construct, id: string, config: DataAwsIdentitystoreUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig">DataAwsIdentitystoreUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig">DataAwsIdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier">putAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier">resetAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAlternateIdentifier` <a name="putAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier"></a>

```typescript
public putAlternateIdentifier(value: DataAwsIdentitystoreUserAlternateIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter"></a>

```typescript
public putFilter(value: DataAwsIdentitystoreUserFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `resetAlternateIdentifier` <a name="resetAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier"></a>

```typescript
public resetAlternateIdentifier(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier">alternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname">nickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput">alternateIdentifierInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses"></a>

```typescript
public readonly addresses: DataAwsIdentitystoreUserAddressesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a>

---

##### `alternateIdentifier`<sup>Required</sup> <a name="alternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier"></a>

```typescript
public readonly alternateIdentifier: DataAwsIdentitystoreUserAlternateIdentifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails"></a>

```typescript
public readonly emails: DataAwsIdentitystoreUserEmailsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a>

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds"></a>

```typescript
public readonly externalIds: DataAwsIdentitystoreUserExternalIdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter"></a>

```typescript
public readonly filter: DataAwsIdentitystoreUserFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a>

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name"></a>

```typescript
public readonly name: DataAwsIdentitystoreUserNameList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a>

---

##### `nickname`<sup>Required</sup> <a name="nickname" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname"></a>

```typescript
public readonly nickname: string;
```

- *Type:* string

---

##### `phoneNumbers`<sup>Required</sup> <a name="phoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers"></a>

```typescript
public readonly phoneNumbers: DataAwsIdentitystoreUserPhoneNumbersList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a>

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `alternateIdentifierInput`<sup>Optional</sup> <a name="alternateIdentifierInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput"></a>

```typescript
public readonly alternateIdentifierInput: DataAwsIdentitystoreUserAlternateIdentifier;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput"></a>

```typescript
public readonly filterInput: DataAwsIdentitystoreUserFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput"></a>

```typescript
public readonly identityStoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreUserAddresses <a name="DataAwsIdentitystoreUserAddresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserAddresses: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses = { ... }
```


### DataAwsIdentitystoreUserAlternateIdentifier <a name="DataAwsIdentitystoreUserAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserAlternateIdentifier: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId">externalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute">uniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId"></a>

```typescript
public readonly externalId: DataAwsIdentitystoreUserAlternateIdentifierExternalId;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#external_id DataAwsIdentitystoreUser#external_id}

---

##### `uniqueAttribute`<sup>Optional</sup> <a name="uniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute"></a>

```typescript
public readonly uniqueAttribute: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#unique_attribute DataAwsIdentitystoreUser#unique_attribute}

---

### DataAwsIdentitystoreUserAlternateIdentifierExternalId <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserAlternateIdentifierExternalId: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}.

---

### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath">attributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue">attributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```typescript
public readonly attributePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserConfig <a name="DataAwsIdentitystoreUserConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserConfig: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier">alternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}.

---

##### `alternateIdentifier`<sup>Optional</sup> <a name="alternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier"></a>

```typescript
public readonly alternateIdentifier: DataAwsIdentitystoreUserAlternateIdentifier;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#alternate_identifier DataAwsIdentitystoreUser#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter"></a>

```typescript
public readonly filter: DataAwsIdentitystoreUserFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#filter DataAwsIdentitystoreUser#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}.

---

### DataAwsIdentitystoreUserEmails <a name="DataAwsIdentitystoreUserEmails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserEmails: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails = { ... }
```


### DataAwsIdentitystoreUserExternalIds <a name="DataAwsIdentitystoreUserExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserExternalIds: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds = { ... }
```


### DataAwsIdentitystoreUserFilter <a name="DataAwsIdentitystoreUserFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserFilter: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath">attributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue">attributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath"></a>

```typescript
public readonly attributePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserName <a name="DataAwsIdentitystoreUserName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserName: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName = { ... }
```


### DataAwsIdentitystoreUserPhoneNumbers <a name="DataAwsIdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

const dataAwsIdentitystoreUserPhoneNumbers: dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreUserAddressesList <a name="DataAwsIdentitystoreUserAddressesList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreUserAddressesOutputReference <a name="DataAwsIdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserAddresses;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserAlternateIdentifierExternalId;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId">putExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute">putUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute">resetUniqueAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalId` <a name="putExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId"></a>

```typescript
public putExternalId(value: DataAwsIdentitystoreUserAlternateIdentifierExternalId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `putUniqueAttribute` <a name="putUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```typescript
public putUniqueAttribute(value: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetUniqueAttribute` <a name="resetUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```typescript
public resetUniqueAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId">externalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute">uniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput">externalIdInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput">uniqueAttributeInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId"></a>

```typescript
public readonly externalId: DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a>

---

##### `uniqueAttribute`<sup>Required</sup> <a name="uniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```typescript
public readonly uniqueAttribute: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: DataAwsIdentitystoreUserAlternateIdentifierExternalId;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `uniqueAttributeInput`<sup>Optional</sup> <a name="uniqueAttributeInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```typescript
public readonly uniqueAttributeInput: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserAlternateIdentifier;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">attributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">attributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributePathInput`<sup>Optional</sup> <a name="attributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```typescript
public readonly attributePathInput: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```typescript
public readonly attributePath: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreUserEmailsList <a name="DataAwsIdentitystoreUserEmailsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreUserEmailsOutputReference <a name="DataAwsIdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserEmails;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a>

---


### DataAwsIdentitystoreUserExternalIdsList <a name="DataAwsIdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreUserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreUserExternalIdsOutputReference <a name="DataAwsIdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserExternalIds;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a>

---


### DataAwsIdentitystoreUserFilterOutputReference <a name="DataAwsIdentitystoreUserFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput">attributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath">attributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributePathInput`<sup>Optional</sup> <a name="attributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput"></a>

```typescript
public readonly attributePathInput: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath"></a>

```typescript
public readonly attributePath: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---


### DataAwsIdentitystoreUserNameList <a name="DataAwsIdentitystoreUserNameList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreUserNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreUserNameOutputReference <a name="DataAwsIdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserName;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a>

---


### DataAwsIdentitystoreUserPhoneNumbersList <a name="DataAwsIdentitystoreUserPhoneNumbersList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreUserPhoneNumbersOutputReference <a name="DataAwsIdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreUser } from '@cdktf/provider-aws'

new dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreUserPhoneNumbers;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a>

---



