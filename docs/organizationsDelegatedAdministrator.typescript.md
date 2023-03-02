# `organizationsDelegatedAdministrator` Submodule <a name="`organizationsDelegatedAdministrator` Submodule" id="@cdktf/provider-aws.organizationsDelegatedAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsDelegatedAdministrator <a name="OrganizationsDelegatedAdministrator" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator aws_organizations_delegated_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer"></a>

```typescript
import { organizationsDelegatedAdministrator } from '@cdktf/provider-aws'

new organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator(scope: Construct, id: string, config: OrganizationsDelegatedAdministratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig">OrganizationsDelegatedAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig">OrganizationsDelegatedAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct"></a>

```typescript
import { organizationsDelegatedAdministrator } from '@cdktf/provider-aws'

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement"></a>

```typescript
import { organizationsDelegatedAdministrator } from '@cdktf/provider-aws'

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource"></a>

```typescript
import { organizationsDelegatedAdministrator } from '@cdktf/provider-aws'

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.delegationEnabledDate">delegationEnabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedMethod">joinedMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedTimestamp">joinedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `delegationEnabledDate`<sup>Required</sup> <a name="delegationEnabledDate" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.delegationEnabledDate"></a>

```typescript
public readonly delegationEnabledDate: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `joinedMethod`<sup>Required</sup> <a name="joinedMethod" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedMethod"></a>

```typescript
public readonly joinedMethod: string;
```

- *Type:* string

---

##### `joinedTimestamp`<sup>Required</sup> <a name="joinedTimestamp" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedTimestamp"></a>

```typescript
public readonly joinedTimestamp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipalInput"></a>

```typescript
public readonly servicePrincipalInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsDelegatedAdministratorConfig <a name="OrganizationsDelegatedAdministratorConfig" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.Initializer"></a>

```typescript
import { organizationsDelegatedAdministrator } from '@cdktf/provider-aws'

const organizationsDelegatedAdministratorConfig: organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}.

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



