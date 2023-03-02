# `route53DomainsRegisteredDomain` Submodule <a name="`route53DomainsRegisteredDomain` Submodule" id="@cdktf/provider-aws.route53DomainsRegisteredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsRegisteredDomain <a name="Route53DomainsRegisteredDomain" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain(scope: Construct, id: string, config: Route53DomainsRegisteredDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig">Route53DomainsRegisteredDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig">Route53DomainsRegisteredDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact">putAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer">putNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact">putRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact">putTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact">resetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy">resetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer">resetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact">resetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy">resetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact">resetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy">resetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock">resetTransferLock</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdminContact` <a name="putAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact"></a>

```typescript
public putAdminContact(value: Route53DomainsRegisteredDomainAdminContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `putNameServer` <a name="putNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer"></a>

```typescript
public putNameServer(value: IResolvable | Route53DomainsRegisteredDomainNameServer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]

---

##### `putRegistrantContact` <a name="putRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact"></a>

```typescript
public putRegistrantContact(value: Route53DomainsRegisteredDomainRegistrantContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `putTechContact` <a name="putTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact"></a>

```typescript
public putTechContact(value: Route53DomainsRegisteredDomainTechContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53DomainsRegisteredDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

---

##### `resetAdminContact` <a name="resetAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact"></a>

```typescript
public resetAdminContact(): void
```

##### `resetAdminPrivacy` <a name="resetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy"></a>

```typescript
public resetAdminPrivacy(): void
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameServer` <a name="resetNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer"></a>

```typescript
public resetNameServer(): void
```

##### `resetRegistrantContact` <a name="resetRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact"></a>

```typescript
public resetRegistrantContact(): void
```

##### `resetRegistrantPrivacy` <a name="resetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy"></a>

```typescript
public resetRegistrantPrivacy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTechContact` <a name="resetTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact"></a>

```typescript
public resetTechContact(): void
```

##### `resetTechPrivacy` <a name="resetTechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy"></a>

```typescript
public resetTechPrivacy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransferLock` <a name="resetTransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock"></a>

```typescript
public resetTransferLock(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail">abuseContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone">abuseContactPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer">nameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName">registrarName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl">registrarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller">reseller</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList">statusList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate">updatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer">whoisServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput">adminContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput">adminPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput">nameServerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput">registrantContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput">registrantPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput">techContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput">techPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput">transferLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy">adminPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy">registrantPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy">techPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock">transferLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abuseContactEmail`<sup>Required</sup> <a name="abuseContactEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail"></a>

```typescript
public readonly abuseContactEmail: string;
```

- *Type:* string

---

##### `abuseContactPhone`<sup>Required</sup> <a name="abuseContactPhone" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone"></a>

```typescript
public readonly abuseContactPhone: string;
```

- *Type:* string

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact"></a>

```typescript
public readonly adminContact: Route53DomainsRegisteredDomainAdminContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer"></a>

```typescript
public readonly nameServer: Route53DomainsRegisteredDomainNameServerList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a>

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact"></a>

```typescript
public readonly registrantContact: Route53DomainsRegisteredDomainRegistrantContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a>

---

##### `registrarName`<sup>Required</sup> <a name="registrarName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName"></a>

```typescript
public readonly registrarName: string;
```

- *Type:* string

---

##### `registrarUrl`<sup>Required</sup> <a name="registrarUrl" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl"></a>

```typescript
public readonly registrarUrl: string;
```

- *Type:* string

---

##### `reseller`<sup>Required</sup> <a name="reseller" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller"></a>

```typescript
public readonly reseller: string;
```

- *Type:* string

---

##### `statusList`<sup>Required</sup> <a name="statusList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList"></a>

```typescript
public readonly statusList: string[];
```

- *Type:* string[]

---

##### `techContact`<sup>Required</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact"></a>

```typescript
public readonly techContact: Route53DomainsRegisteredDomainTechContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts"></a>

```typescript
public readonly timeouts: Route53DomainsRegisteredDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a>

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate"></a>

```typescript
public readonly updatedDate: string;
```

- *Type:* string

---

##### `whoisServer`<sup>Required</sup> <a name="whoisServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer"></a>

```typescript
public readonly whoisServer: string;
```

- *Type:* string

---

##### `adminContactInput`<sup>Optional</sup> <a name="adminContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput"></a>

```typescript
public readonly adminContactInput: Route53DomainsRegisteredDomainAdminContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `adminPrivacyInput`<sup>Optional</sup> <a name="adminPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput"></a>

```typescript
public readonly adminPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameServerInput`<sup>Optional</sup> <a name="nameServerInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput"></a>

```typescript
public readonly nameServerInput: IResolvable | Route53DomainsRegisteredDomainNameServer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]

---

##### `registrantContactInput`<sup>Optional</sup> <a name="registrantContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput"></a>

```typescript
public readonly registrantContactInput: Route53DomainsRegisteredDomainRegistrantContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `registrantPrivacyInput`<sup>Optional</sup> <a name="registrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput"></a>

```typescript
public readonly registrantPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `techContactInput`<sup>Optional</sup> <a name="techContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput"></a>

```typescript
public readonly techContactInput: Route53DomainsRegisteredDomainTechContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `techPrivacyInput`<sup>Optional</sup> <a name="techPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput"></a>

```typescript
public readonly techPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Route53DomainsRegisteredDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> | cdktf.IResolvable

---

##### `transferLockInput`<sup>Optional</sup> <a name="transferLockInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput"></a>

```typescript
public readonly transferLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminPrivacy`<sup>Required</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy"></a>

```typescript
public readonly adminPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `registrantPrivacy`<sup>Required</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy"></a>

```typescript
public readonly registrantPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `techPrivacy`<sup>Required</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy"></a>

```typescript
public readonly techPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transferLock`<sup>Required</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock"></a>

```typescript
public readonly transferLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsRegisteredDomainAdminContact <a name="Route53DomainsRegisteredDomainAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

const route53DomainsRegisteredDomainAdminContact: route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams">extraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extraParams`<sup>Optional</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams"></a>

```typescript
public readonly extraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainConfig <a name="Route53DomainsRegisteredDomainConfig" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

const route53DomainsRegisteredDomainConfig: route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy">adminPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer">nameServer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]</code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy">registrantPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy">techPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock">transferLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `adminContact`<sup>Optional</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact"></a>

```typescript
public readonly adminContact: Route53DomainsRegisteredDomainAdminContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `adminPrivacy`<sup>Optional</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy"></a>

```typescript
public readonly adminPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer"></a>

```typescript
public readonly nameServer: IResolvable | Route53DomainsRegisteredDomainNameServer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `registrantContact`<sup>Optional</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact"></a>

```typescript
public readonly registrantContact: Route53DomainsRegisteredDomainRegistrantContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy"></a>

```typescript
public readonly registrantPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `techContact`<sup>Optional</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact"></a>

```typescript
public readonly techContact: Route53DomainsRegisteredDomainTechContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `techPrivacy`<sup>Optional</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy"></a>

```typescript
public readonly techPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53DomainsRegisteredDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `transferLock`<sup>Optional</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock"></a>

```typescript
public readonly transferLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

### Route53DomainsRegisteredDomainNameServer <a name="Route53DomainsRegisteredDomainNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

const route53DomainsRegisteredDomainNameServer: route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps">glueIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}.

---

##### `glueIps`<sup>Optional</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps"></a>

```typescript
public readonly glueIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}.

---

### Route53DomainsRegisteredDomainRegistrantContact <a name="Route53DomainsRegisteredDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

const route53DomainsRegisteredDomainRegistrantContact: route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams">extraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extraParams`<sup>Optional</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams"></a>

```typescript
public readonly extraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTechContact <a name="Route53DomainsRegisteredDomainTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

const route53DomainsRegisteredDomainTechContact: route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams">extraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extraParams`<sup>Optional</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams"></a>

```typescript
public readonly extraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTimeouts <a name="Route53DomainsRegisteredDomainTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

const route53DomainsRegisteredDomainTimeouts: route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsRegisteredDomainAdminContactOutputReference <a name="Route53DomainsRegisteredDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams">resetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParams` <a name="resetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams"></a>

```typescript
public resetExtraParams(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput">extraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams">extraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamsInput`<sup>Optional</sup> <a name="extraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput"></a>

```typescript
public readonly extraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `extraParams`<sup>Required</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams"></a>

```typescript
public readonly extraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53DomainsRegisteredDomainAdminContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---


### Route53DomainsRegisteredDomainNameServerList <a name="Route53DomainsRegisteredDomainNameServerList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get"></a>

```typescript
public get(index: number): Route53DomainsRegisteredDomainNameServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsRegisteredDomainNameServer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>[]

---


### Route53DomainsRegisteredDomainNameServerOutputReference <a name="Route53DomainsRegisteredDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps">resetGlueIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueIps` <a name="resetGlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps"></a>

```typescript
public resetGlueIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput">glueIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps">glueIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueIpsInput`<sup>Optional</sup> <a name="glueIpsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput"></a>

```typescript
public readonly glueIpsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `glueIps`<sup>Required</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps"></a>

```typescript
public readonly glueIps: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53DomainsRegisteredDomainNameServer | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a> | cdktf.IResolvable

---


### Route53DomainsRegisteredDomainRegistrantContactOutputReference <a name="Route53DomainsRegisteredDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams">resetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParams` <a name="resetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams"></a>

```typescript
public resetExtraParams(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput">extraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams">extraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamsInput`<sup>Optional</sup> <a name="extraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput"></a>

```typescript
public readonly extraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `extraParams`<sup>Required</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams"></a>

```typescript
public readonly extraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53DomainsRegisteredDomainRegistrantContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---


### Route53DomainsRegisteredDomainTechContactOutputReference <a name="Route53DomainsRegisteredDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams">resetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParams` <a name="resetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams"></a>

```typescript
public resetExtraParams(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput">extraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams">extraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamsInput`<sup>Optional</sup> <a name="extraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput"></a>

```typescript
public readonly extraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `extraParams`<sup>Required</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams"></a>

```typescript
public readonly extraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53DomainsRegisteredDomainTechContact;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---


### Route53DomainsRegisteredDomainTimeoutsOutputReference <a name="Route53DomainsRegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53DomainsRegisteredDomain } from '@cdktf/provider-aws'

new route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53DomainsRegisteredDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> | cdktf.IResolvable

---



