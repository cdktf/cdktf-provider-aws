# `auditmanagerOrganizationAdminAccountRegistration` Submodule <a name="`auditmanagerOrganizationAdminAccountRegistration` Submodule" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerOrganizationAdminAccountRegistration <a name="AuditmanagerOrganizationAdminAccountRegistration" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer"></a>

```typescript
import { auditmanagerOrganizationAdminAccountRegistration } from '@cdktf/provider-aws'

new auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration(scope: Construct, id: string, config: AuditmanagerOrganizationAdminAccountRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig">AuditmanagerOrganizationAdminAccountRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig">AuditmanagerOrganizationAdminAccountRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct"></a>

```typescript
import { auditmanagerOrganizationAdminAccountRegistration } from '@cdktf/provider-aws'

auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement"></a>

```typescript
import { auditmanagerOrganizationAdminAccountRegistration } from '@cdktf/provider-aws'

auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource"></a>

```typescript
import { auditmanagerOrganizationAdminAccountRegistration } from '@cdktf/provider-aws'

auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput">adminAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId">adminAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `adminAccountIdInput`<sup>Optional</sup> <a name="adminAccountIdInput" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput"></a>

```typescript
public readonly adminAccountIdInput: string;
```

- *Type:* string

---

##### `adminAccountId`<sup>Required</sup> <a name="adminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId"></a>

```typescript
public readonly adminAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerOrganizationAdminAccountRegistrationConfig <a name="AuditmanagerOrganizationAdminAccountRegistrationConfig" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.Initializer"></a>

```typescript
import { auditmanagerOrganizationAdminAccountRegistration } from '@cdktf/provider-aws'

const auditmanagerOrganizationAdminAccountRegistrationConfig: auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId">adminAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminAccountId`<sup>Required</sup> <a name="adminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId"></a>

```typescript
public readonly adminAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}.

---



