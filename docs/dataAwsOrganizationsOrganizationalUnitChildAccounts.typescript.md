# `dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule <a name="`dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts aws_organizations_organizational_unit_child_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

new dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitChildAccountsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig">DataAwsOrganizationsOrganizationalUnitChildAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig">DataAwsOrganizationsOrganizationalUnitChildAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts"></a>

```typescript
public readonly accounts: DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

const dataAwsOrganizationsOrganizationalUnitChildAccountsAccounts: dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts = { ... }
```


### DataAwsOrganizationsOrganizationalUnitChildAccountsConfig <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

const dataAwsOrganizationsOrganizationalUnitChildAccountsConfig: dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

new dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get"></a>

```typescript
public get(index: number): DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnitChildAccounts } from '@cdktf/provider-aws'

new dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a>

---



